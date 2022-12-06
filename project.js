//CMS module for work/projects

let workDirectory = "/work";

// get /work directory structure html

let workArr = [];
let newWorkArr = [];
let archivedWorkArr = [];

let subSearchList = ["/work", "/work/new", "/work/archive"];
let sidebar = document.getElementsByClassName("sidebar")[0];

let url = window.location.pathname;
url = url.replace("index.html", "").replace("index.htm", "");

if (url === "/") {
  async function getProjects(directory) {
    let directoryContentHTML = await $.ajax({
      url: directory,
      type: "GET",
    });

    let projects = $(directoryContentHTML).find("a");

    for (let i = 0; i < projects.length; i++) {
      // get a tag's innerHTML and href attr
      let a_href = $(projects[i]).attr("href");
      a_href = a_href.replace(/\\/g, "/");
      if (a_href[a_href.length - 1] === "/") {
        a_href = a_href.slice(0, -1);
      }
      if (subSearchList.includes(a_href) || a_href === "/") {
        continue;
      }

      let jsonDir = a_href + "/project.json";
      let projectJSONObj = {};

      try {
        projectJSONObj = await $.ajax({
          url: jsonDir,
          type: "GET",
        });
        projectJSONObj["id"] = `${a_href.split("/").pop()}-${projectJSONObj[
          "info"
        ]["bgColor"].slice(1)}`;
      } catch (e) {
        //   console.error(e);
      }

      projectJSONObj["directory"] = a_href;

      if (directory === "/work" && a_href.includes("/work/")) {
        workArr.push(projectJSONObj);
      } else if (directory === "/work/new" && a_href.includes("/work/new/")) {
        newWorkArr.push(projectJSONObj);
      } else if (
        directory === "/work/archive" &&
        a_href.includes("/work/archive/")
      ) {
        archivedWorkArr.push(projectJSONObj);
      }
    }
  }
  async function SideBarFunctionality() {
    "use strict";

    const sidebar = document.getElementsByClassName("sidebar")[0];
    if (sidebar) {
      sidebar.setAttribute("data-ix", "sidebar");
    }
    const rotateMenu = document.getElementsByClassName("work")[0];
    if (rotateMenu) {
      rotateMenu.setAttribute("data-ix", "show-sidebar");
    }
    const bigbutton = document.getElementsByClassName("bigbutton")[0];
    if (bigbutton) {
      bigbutton.setAttribute("data-ix", "circlebutton");
    }

    var Main = function () {};
    Main.main = function () {
      var initTimer = new haxe_Timer(50);
      initTimer.run = function () {
        if (
          window.document.readyState == "interactive" ||
          window.document.readyState == "complete"
        ) {
          Main.init();
          initTimer.stop();
        }
      };
    };
    Main.init = function () {
      Main.heroElement =
        window.document.getElementsByClassName("hero-section")[0];
      Main.projectsElement =
        window.document.getElementsByClassName("projects")[0];
      Main.sidebarElement =
        window.document.getElementsByClassName("sidebar")[0];

      var img_len = Main.projectsElement.children.length;
      var _g21 = 0;
      while (_g21 < img_len) {
        var child1 = Main.projectsElement.children.item(_g21++);
        if (child1.tagName == "IMG") {
          var img = child1;
          var key9 = img.id;
          var _this9 = Main.navLinks.images;
          if (__map_reserved[key9] != null) {
            _this9.setReserved(key9, img);
          } else {
            _this9.h[key9] = img;
          }
        }
      }
      var nav_len = Main.sidebarElement.children.length;
      var _g4 = 0;
      while (_g4 < nav_len) {
        var child2 = Main.sidebarElement.children.item(_g4++);
        if (child2.tagName == "A") {
          var anchor = child2;
          var anID = [anchor.id.split("-")];
          if (anID[0].length == 2) {
            var _this10 = Main.navLinks.anchors;
            var key10 = anID[0][0];
            if (__map_reserved[key10] != null) {
              _this10.setReserved(key10, anchor);
            } else {
              _this10.h[key10] = anchor;
            }
            var this1 = Main.navLinks.colors;
            var value = "#" + anID[0][1].toUpperCase();
            var _this11 = this1;
            var key11 = anID[0][0];
            if (__map_reserved[key11] != null) {
              _this11.setReserved(key11, value);
            } else {
              _this11.h[key11] = value;
            }
            anchor.addEventListener(
              "mouseover",
              (function (anID1) {
                return function () {
                  Main.previewProject(anID1[0][0]);
                };
              })(anID)
            );
          }
        }
      }

      new haxe_Timer(24).run = function () {
        if (Main.latestScrollY != window.scrollY) {
          Main.latestScrollY = window.scrollY;
          Main.updateScroll();
        }
        if (Main.sidebarElement.style.display == "none") {
          if (Main.stopMotionMode == false) {
            Main.stopMotionMode = true;
            Main.updateScroll();
          }
        } else {
          Main.stopMotionMode = false;
        }
      };
      Main.updateScroll();
    };

    Main.updateScroll = function () {
      Main.hideProjects();
    };
    Main.previewProject = function (id) {
      var _this = Main.navLinks.colors;
      if (
        (__map_reserved[id] != null
          ? _this.existsReserved(id)
          : _this.h.hasOwnProperty(id)) == true
      ) {
        var _this1 = Main.navLinks.colors;
        $(".hero-section svg").hide();
        Main.sidebarElement.style.backgroundColor =
          __map_reserved[id] != null ? _this1.getReserved(id) : _this1.h[id];
      }
      var _this2 = Main.navLinks.images;
      if (
        (__map_reserved[id] != null
          ? _this2.existsReserved(id)
          : _this2.h.hasOwnProperty(id)) == true
      ) {
        var _this3 = Main.navLinks.images;
        Main.heroElement.style.backgroundImage =
          "url(" +
          (__map_reserved[id] != null ? _this3.getReserved(id) : _this3.h[id])
            .src +
          ")";
        $(".hero-section").addClass("show-project");
      }
    };
    Main.hideProjects = function () {
      $(".hero-section svg").show();
      $(".hero-section").css("background-image", "none");
      $(".hero-section").removeClass("show-project");
    };
    Main.setStopMotionFrame = function (position, sequence) {
      if (sequence.images.length > 0) {
        var framePos = Math.floor((sequence.images.length - 1) * position);
        Main.heroElement.style.backgroundImage =
          "url(" + sequence.images[framePos].src + ")";
      }
    };
    var Std = function () {};
    Std.parseInt = function (x) {
      var v = parseInt(
        x,
        x && x[0] == "0" && (x[1] == "x" || x[1] == "X") ? 16 : 10
      );
      if (isNaN(v)) {
        return null;
      }
      return v;
    };
    var haxe_IMap = function () {};
    var haxe_Timer = function (time_ms) {
      var me = this;
      this.id = setInterval(function () {
        me.run();
      }, time_ms);
    };
    haxe_Timer.prototype = {
      stop: function () {
        if (this.id == null) {
          return;
        }
        clearInterval(this.id);
        this.id = null;
      },
      run: function () {},
    };
    var haxe_ds_StringMap = function () {
      this.h = {};
    };
    haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
    haxe_ds_StringMap.prototype = {
      setReserved: function (key, value) {
        if (this.rh == null) {
          this.rh = {};
        }
        this.rh["$" + key] = value;
      },
      getReserved: function (key) {
        if (this.rh == null) {
          return null;
        } else {
          return this.rh["$" + key];
        }
      },
      existsReserved: function (key) {
        if (this.rh == null) {
          return false;
        }
        return this.rh.hasOwnProperty("$" + key);
      },
    };

    var __map_reserved = {};
    Main.latestScrollY = 0;
    Main.relatedScroll = 0;
    Main.stopMotionMode = true;
    Main.animations = [];
    Main.animationMap = new haxe_ds_StringMap();
    Main.navLinks = {
      images: new haxe_ds_StringMap(),
      anchors: new haxe_ds_StringMap(),
      colors: new haxe_ds_StringMap(),
    };
    Main.main();
  }
  await getProjects(subSearchList[0]);
  await getProjects(subSearchList[1]);
  // this is for archive projects (to show archive projects also uncommenet this line below)
  // await getProjects(subSearchList[1]);

  let allWorksList = [].concat(newWorkArr, workArr, archivedWorkArr);

  //create dynamic sidebar from allWorksList

  //insert link to sidebar
  let projectBackground = "";

  for (let i = 0; i < allWorksList.length; i++) {
    let project = allWorksList[i];
    let projectLink = document.createElement("a");

    let _url = project.directory;

    if (_url[_url.length - 1] === "/")
      _url = _url.substring(0, _url.length - 1);

    let fileName = _url.split("/").pop();
    let projectTitle = fileName.replace("_", " ");

    projectTitle = projectTitle[0].toUpperCase() + projectTitle.slice(1);

    projectLink.setAttribute("href", project.directory);
    projectLink.setAttribute("class", "sidebar-project-link");
    projectLink.setAttribute("id", project?.id ?? "");

    projectLink.innerHTML = `<span>${projectTitle}</span>`;

    let projectBGCode = `<img src="${project.directory}/0.png" class="sidebar-project-image" id="${fileName}"/>`;
    projectBackground = projectBackground + projectBGCode;

    document.getElementsByClassName("sidebar")[0].appendChild(projectLink);
  }
  document.getElementsByClassName("projects")[0].innerHTML = projectBackground;
  await SideBarFunctionality();
} else {
  let projectJSONObj = {};
  let medias = [];

  async function getMediaArr() {
    try {
      let i = 1;

      let mediaFails = 0;
      /*media fails is 2 because 1 is for image and 2 is for video.
      If neither image nor video is found means we need to stop the loop*/
      while (mediaFails < 2) {
        let _url = url;
        let extension = mediaFails === 0 ? "png" : "mp4";
        let fileName = _url.slice(0, -1).split("/").pop();
        fileName = fileName[0].toUpperCase() + fileName.slice(1);
        let mediaUrl = `${url}${i}.${extension}`;
        try {
          await $.ajax({
            url: mediaUrl,
            type: "GET",
          });

          let mediaElement =
            mediaFails === 0
              ? `<img src="${mediaUrl}" />`
              : `<video src="${mediaUrl}" autoplay loop muted playsinline width="100%"></video>`;
          medias.push(mediaElement);

          i++;
          mediaFails = 0;
          //if media is found reset the media fails to 0
        } catch (e) {
          mediaFails++;
          //if media is not found increase the media fails by 1
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  async function setHtml() {
    let _url = url;
    let fileName = _url.slice(0, -1).split("/").pop();
    let projectTitle = fileName.replace("_", " ");
    projectTitle = projectTitle[0].toUpperCase() + projectTitle.slice(1);

    let jsonDir = url + "project.json";
    projectJSONObj = await $.ajax({
      url: jsonDir,
      type: "GET",
    });
    let bodyHtml = `<a id="logo" class="logo" href="/"><img src="/images/under-header-logo.svg" /></a><img src="0.png" /> <section class="content">`;

    let contentHtml = `<p>${projectTitle} <br/> <br/>`;

    let textContent = projectJSONObj.content.text;
    for (let i = 0; i < textContent.length; i++) {
      contentHtml += `${textContent[i]} <br/> <br/>`;
    }

    let roles = projectJSONObj?.info?.roles;

    for (let i = 0; i < roles.length; i++) {
      let role = roles[i];
      if (role.role === "Client") {
        contentHtml += `Client | <a href="${role?.link}" target="_blank" class="project-link">${role?.name}</a> <br/>`;
      } else {
        contentHtml += `${role?.role} | ${role?.name} <br/>`;
      }
    }
    contentHtml += `</p></section>`;
    bodyHtml += contentHtml;

    for (let i = 0; i < medias.length; i++) {
      // let image = images[i];
      bodyHtml += medias[i];
    }

    document.body.innerHTML = bodyHtml + document.body.innerHTML;

    //insert meta tags and title tags
    let metaTag = document.createElement("meta");
    metaTag.setAttribute("property", "og:title");
    metaTag.setAttribute("content", projectTitle);
    document.head.appendChild(metaTag);
    let titleTag = document.createElement("title");
    titleTag.innerHTML = projectTitle;
    document.head.appendChild(titleTag);
  }

  await getMediaArr();
  await setHtml();
}
