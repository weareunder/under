// New Site JS

function isMobile() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

const lottieAnimations = [
  {
    animation: 'https://weareunder.design/animations/animation_1.json'
  },
  {
    animation: 'https://weareunder.design/animations/animation_1.json'
  },
  {
    animation: 'https://weareunder.design/animations/animation_1.json'
  }
]

const randomIndex = getRandomInt(0, lottieAnimations.length - 1);
const randomAnimation = lottieAnimations[randomIndex].animation;

if (!isMobile()) {

    var newq;
    let h,w,nh,nw,s; 
    
    function newPosition(){   
      h = window.innerHeight - 50;
      w = window.innerWidth - 50;
      nh = Math.floor(Math.random() * h);
      nw = Math.floor(Math.random() * w);
      s = Math.floor(6000)
      return [nh,nw,s];       
    }
    
    var circ = document.querySelectorAll('.circle');
    circ.forEach(function circ(myclass) {
      startCircleAnimation(myclass, circ);
    });
    
    $(document).on('mouseenter', '.circle', function() {
      $(this).addClass('stoped');
      $(this).stop();
    });
    
    $(document).on('mouseleave', '.circle', function() {
      var that = this
      $(this).removeClass('stoped');
      var circ = document.querySelectorAll('.circle');
      circ.forEach(function circ(myclass) {
        if (myclass.className === that.className) {
          startCircleAnimation(myclass, circ);
        }
      });
    });
    
    function startCircleAnimation(circle, circ) {
      var newq = newPosition();
      $(circle).animate(
            { 
              top: newq[0],
              left: newq[1] 
            },
            newq[2],
            function(){
                circ(circle);        
            }
        );
    }
}


(function () { "use strict";



const sidebar = document.getElementsByClassName("sidebar")[0]
if (sidebar) {
    sidebar.setAttribute("data-ix", "sidebar")
}
const rotateMenu = document.getElementsByClassName("work")[0]
if (rotateMenu) {
    rotateMenu.setAttribute("data-ix", "show-sidebar")
}
const bigbutton = document.getElementsByClassName("bigbutton")[0]
  if (bigbutton) {
      bigbutton.setAttribute("data-ix", "circlebutton")
  }     

var Main = function() { };
Main.main = function() {
    var initTimer = new haxe_Timer(50);
    initTimer.run = function() {
        if(window.document.readyState == "interactive" || window.document.readyState == "complete") {
            Main.init();
            initTimer.stop();
        }
    };
};
Main.init = function() {
    Main.heroElement = window.document.getElementsByClassName("hero-section")[0];
    Main.projectsElement = window.document.getElementsByClassName("projects")[0];
    Main.sidebarElement = window.document.getElementsByClassName("sidebar")[0];
    if(window.document.getElementById("sequence" + 1) != null) {
        var seq = { images : [], id : "sequence" + 1};
        Main.animations.push(seq);
        var key = seq.id;
        var _this = Main.animationMap;
        if(__map_reserved[key] != null) {
            _this.setReserved(key,seq);
        } else {
            _this.h[key] = seq;
        }
    }
    if(window.document.getElementById("sequence" + 2) != null) {
        var seq1 = { images : [], id : "sequence" + 2};
        Main.animations.push(seq1);
        var key1 = seq1.id;
        var _this1 = Main.animationMap;
        if(__map_reserved[key1] != null) {
            _this1.setReserved(key1,seq1);
        } else {
            _this1.h[key1] = seq1;
        }
    }
    if(window.document.getElementById("sequence" + 3) != null) {
        var seq2 = { images : [], id : "sequence" + 3};
        Main.animations.push(seq2);
        var key2 = seq2.id;
        var _this2 = Main.animationMap;
        if(__map_reserved[key2] != null) {
            _this2.setReserved(key2,seq2);
        } else {
            _this2.h[key2] = seq2;
        }
    }
    if(window.document.getElementById("sequence" + 4) != null) {
        var seq3 = { images : [], id : "sequence" + 4};
        Main.animations.push(seq3);
        var key3 = seq3.id;
        var _this3 = Main.animationMap;
        if(__map_reserved[key3] != null) {
            _this3.setReserved(key3,seq3);
        } else {
            _this3.h[key3] = seq3;
        }
    }
    if(window.document.getElementById("sequence" + 5) != null) {
        var seq4 = { images : [], id : "sequence" + 5};
        Main.animations.push(seq4);
        var key4 = seq4.id;
        var _this4 = Main.animationMap;
        if(__map_reserved[key4] != null) {
            _this4.setReserved(key4,seq4);
        } else {
            _this4.h[key4] = seq4;
        }
    }
    if(window.document.getElementById("sequence" + 6) != null) {
        var seq5 = { images : [], id : "sequence" + 6};
        Main.animations.push(seq5);
        var key5 = seq5.id;
        var _this5 = Main.animationMap;
        if(__map_reserved[key5] != null) {
            _this5.setReserved(key5,seq5);
        } else {
            _this5.h[key5] = seq5;
        }
    }
    if(window.document.getElementById("sequence" + 7) != null) {
        var seq6 = { images : [], id : "sequence" + 7};
        Main.animations.push(seq6);
        var key6 = seq6.id;
        var _this6 = Main.animationMap;
        if(__map_reserved[key6] != null) {
            _this6.setReserved(key6,seq6);
        } else {
            _this6.h[key6] = seq6;
        }
    }
    if(window.document.getElementById("sequence" + 8) != null) {
        var seq7 = { images : [], id : "sequence" + 8};
        Main.animations.push(seq7);
        var key7 = seq7.id;
        var _this7 = Main.animationMap;
        if(__map_reserved[key7] != null) {
            _this7.setReserved(key7,seq7);
        } else {
            _this7.h[key7] = seq7;
        }
    }
    if(window.document.getElementById("sequence" + 9) != null) {
        var seq8 = { images : [], id : "sequence" + 9};
        Main.animations.push(seq8);
        var key8 = seq8.id;
        var _this8 = Main.animationMap;
        if(__map_reserved[key8] != null) {
            _this8.setReserved(key8,seq8);
        } else {
            _this8.h[key8] = seq8;
        }
    }
    var _g = 0;
    var _g1 = Main.animations;
    while(_g < _g1.length) {
        var seq9 = _g1[_g];
        ++_g;
        seq9.container = window.document.getElementById(seq9.id);
        var len = seq9.container.children.length;
        var _g2 = 0;
        while(_g2 < len) {
            var child = seq9.container.children.item(_g2++);
            var image;
            if(child.tagName == "IMG") {
                image = child;
                seq9.images.push(image);
            }
        }
    }
    var img_len = Main.projectsElement.children.length;
    var _g21 = 0;
    while(_g21 < img_len) {
        var child1 = Main.projectsElement.children.item(_g21++);
        if(child1.tagName == "IMG") {
            var img = child1;
            var key9 = img.id;
            var _this9 = Main.navLinks.images;
            if(__map_reserved[key9] != null) {
                _this9.setReserved(key9,img);
            } else {
                _this9.h[key9] = img;
            }
        }
    }
    var nav_len = Main.sidebarElement.children.length;
    var _g4 = 0;
    while(_g4 < nav_len) {
        var child2 = Main.sidebarElement.children.item(_g4++);
        if(child2.tagName == "A") {
            var anchor = child2;
            var anID = [anchor.id.split("-")];
            if(anID[0].length == 2) {
                var _this10 = Main.navLinks.anchors;
                var key10 = anID[0][0];
                if(__map_reserved[key10] != null) {
                    _this10.setReserved(key10,anchor);
                } else {
                    _this10.h[key10] = anchor;
                }
                var this1 = Main.navLinks.colors;
                var value = "#" + anID[0][1].toUpperCase();
                var _this11 = this1;
                var key11 = anID[0][0];
                if(__map_reserved[key11] != null) {
                    _this11.setReserved(key11,value);
                } else {
                    _this11.h[key11] = value;
                }
                anchor.addEventListener("mouseover",(function(anID1) {
                    return function() {
                        Main.previewProject(anID1[0][0]);
                    };
                })(anID));
            }
        }
    }
    if(Main.animations.length > 1) {
        var storage = js_Browser.getSessionStorage();
        if(storage != null) {
            if(storage.getItem("latest_animation_index") != null) {
                var latest = storage.getItem("latest_animation_index");
                if(latest != null) {
                    var n = Std.parseInt(latest);
                    if(n < Main.animations.length - 1) {
                        ++n;
                    } else {
                        n = 0;
                    }
                    Main.currentSequence = Main.animations[n];
                    storage.setItem("latest_animation_index",n == null ? "null" : "" + n);
                }
            } else {
                storage.setItem("latest_animation_index","0");
                Main.currentSequence = Main.animations[Math.floor(Math.random() * Main.animations.length)];
            }
        }
    } else if(Main.animations.length == 1) {
        Main.currentSequence = Main.animations[0];
    }
    new haxe_Timer(24).run = function() {
        if(Main.latestScrollY != window.scrollY) {
            Main.latestScrollY = window.scrollY;
            Main.updateScroll();
        }
        if(Main.sidebarElement.style.display == "none") {
            if(Main.stopMotionMode == false) {
                Main.stopMotionMode = true;
                Main.updateScroll();
            }
        } else {
            Main.stopMotionMode = false;
        }
    };
    Main.updateScroll();
};
Main.updateScroll = function() {
    Main.hideProjects();
    Main.relatedScroll = Main.latestScrollY / (window.document.body.clientHeight - window.innerHeight);
    if(Main.stopMotionMode == true) {
        if(Main.currentSequence != null) {
            Main.setStopMotionFrame(Main.relatedScroll,Main.currentSequence);
        }
    }
};
Main.previewProject = function(id) {
    var _this = Main.navLinks.colors;
    if((__map_reserved[id] != null ? _this.existsReserved(id) : _this.h.hasOwnProperty(id)) == true) {
        var _this1 = Main.navLinks.colors;
        $('.hero-section svg').hide();
        Main.sidebarElement.style.backgroundColor = __map_reserved[id] != null ? _this1.getReserved(id) : _this1.h[id];
    }
    var _this2 = Main.navLinks.images;
    if((__map_reserved[id] != null ? _this2.existsReserved(id) : _this2.h.hasOwnProperty(id)) == true) {
        var _this3 = Main.navLinks.images;
        Main.heroElement.style.backgroundImage = "url(" + (__map_reserved[id] != null ? _this3.getReserved(id) : _this3.h[id]).src + ")";
        $('.hero-section').addClass('show-project');
    }
};
Main.hideProjects = function() {
  $('.hero-section svg').show();
  $('.hero-section').removeClass('show-project');
};
Main.setStopMotionFrame = function(position,sequence) {
    if(sequence.images.length > 0) {
        var framePos = Math.floor((sequence.images.length - 1) * position);
        Main.heroElement.style.backgroundImage = "url(" + sequence.images[framePos].src + ")";
    }
};
var Std = function() { };
Std.parseInt = function(x) {
    var v = parseInt(x, x && x[0]=="0" && (x[1]=="x" || x[1]=="X") ? 16 : 10);
    if(isNaN(v)) {
        return null;
    }
    return v;
};
var haxe_IMap = function() { };
var haxe_Timer = function(time_ms) {
    var me = this;
    this.id = setInterval(function() {
        me.run();
    },time_ms);
};
haxe_Timer.prototype = {
    stop: function() {
        if(this.id == null) {
            return;
        }
        clearInterval(this.id);
        this.id = null;
    }
    ,run: function() {
    }
};
var haxe_ds_StringMap = function() {
    this.h = { };
};
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
    setReserved: function(key,value) {
        if(this.rh == null) {
            this.rh = { };
        }
        this.rh["$" + key] = value;
    }
    ,getReserved: function(key) {
        if(this.rh == null) {
            return null;
        } else {
            return this.rh["$" + key];
        }
    }
    ,existsReserved: function(key) {
        if(this.rh == null) {
            return false;
        }
        return this.rh.hasOwnProperty("$" + key);
    }
};
var js_Browser = function() { };
js_Browser.getSessionStorage = function() {
    try {
        var s = window.sessionStorage;
        s.getItem("");
        if(s.length == 0) {
            var key = "_hx_" + Math.random();
            s.setItem(key,key);
            s.removeItem(key);
        }
        return s;
    } catch( e ) {
        return null;
    }
};
var __map_reserved = {};
Main.latestScrollY = 0;
Main.relatedScroll = 0;
Main.stopMotionMode = true;
Main.animations = [];
Main.animationMap = new haxe_ds_StringMap();
Main.navLinks = { images : new haxe_ds_StringMap(), anchors : new haxe_ds_StringMap(), colors : new haxe_ds_StringMap()};
Main.main();
})();

// Custom CSS
var styles = `

#menu-wrapper {
    position: static
    z-index: 99;
}
`
var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)


// Mouse Logic
let tricksCursor = document.querySelector('.cursor');
window.addEventListener('mousemove', cursor);

function cursor(e) {
  tricksCursor.style.top = e.clientY + 'px';
  tricksCursor.style.left = e.clientX + 'px';
}

$( "a" ).mouseenter(function() {
  $('.cursor').addClass('is-hover');
});

$( "a" ).mouseleave(function() {
  $('.cursor').removeClass('is-hover');
});


// Projects Sidebar
$('.work').on('click',function() {
  $('.sidebar').css({
    'display':'block'+' ',
  });
  $('#menu-wrapper').css({
    'display':'none'+' ',
  });
  $('#logo').css({
    'display':'none'+' ',
  });
});

$('.sidebar').on('mouseover',function() {
  $('.sidebar').css({
    'display':'block'+' ',
  });
  $('#menu-wrapper').css({
    'display':'none'+' ',
  });
  $('#logo').css({
    'display':'none'+' ',
  });
});

$('.sidebar').on('mouseout',function() {
  $('.sidebar').css({
    'display':'none'+' ',
  });
  $('#menu-wrapper').css({
    'display':'block'+' ',
  });
  $('#logo').css({
    'display':'block'+' ',
  });
});

$('.close-menu').on('click',function() {
$('.sidebar').css({
'display':'none'+' ',
});
$('#menu-wrapper').css({
'display':'flex'+' ',
});
$('#logo').css({
'display':'block'+' ',
});
});


// Brand Sprint Page
$(document).ready(function(){
            var a =1;
            setInterval(function(){
               if(a>4)
                   {
                       a = 1;
                   }
                switch(a)
                    {
                        case 1:
                            $("#color-animation, #cta-animation").css({"background-color":"#8159fb"});
                            a++;
                            break;
                        case 2:
                            $("#color-animation, #cta-animation").css({"background-color":"#fd3c2d"});
                            a++;
                            break;
                        case 3:
                            $("#color-animation, #cta-animation").css({"background-color":"#ffbfe1"});
                            a++;
                            break;
                        case 4:
                            $("#color-animation, #cta-animation").css({"background-color":"#fdc800"});
                            a++;
                            break;
                    }
            },6000);
        });

        
        $('#show-more').on('click',function() {
          $('.review-content').css({
            'display':'block'+' ',
          });
          $('#show-more').css({
            'display':'none'+' ',
          });
        });

// Lottie Animation - Took from Senseip Project :)


/*!
 * GSAP 3.3.1
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

    !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t){return"string"==typeof t}function o(t){return"function"==typeof t}function p(t){return"number"==typeof t}function q(t){return void 0===t}function r(t){return"object"==typeof t}function s(t){return!1!==t}function t(){return"undefined"!=typeof window}function u(t){return o(t)||n(t)}function K(t){return(l=pt(t,at))&&ie}function L(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function M(t,e){return!e&&console.warn(t)}function N(t,e){return t&&(at[t]=e)&&l&&(l[t]=e)||at}function O(){return 0}function Y(t){var e,i,n=t[0];if(r(n)||o(n)||(t=[t]),!(e=(n._gsap||{}).harness)){for(i=dt.length;i--&&!dt[i].targetTest(n););e=dt[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ft(t[i],e)))||t.splice(i,1);return t}function Z(t){return t._gsap||Y(yt(t))[0]._gsap}function $(t,e){var r=t[e];return o(r)?t[e]():q(r)&&t.getAttribute(e)||r}function _(t,e){return(t=t.split(",")).forEach(e)||t}function aa(t){return Math.round(1e5*t)/1e5||0}function ba(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ca(t,e,r){var i,n=p(t[1]),a=(n?2:1)+(e<2?0:1),o=t[a];if(n&&(o.duration=t[1]),o.parent=r,e){for(i=o;r&&!("immediateRender"in i);)i=r.vars.defaults||{},r=s(r.vars.inherit)&&r.parent;o.immediateRender=s(i.immediateRender),e<2?o.runBackwards=1:o.startAt=t[a-1]}return o}function da(){var t,e,r=ot.length,i=ot.slice(0);for(ut={},t=ot.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ea(t,e,r,i){ot.length&&da(),t.render(e,r,i),ot.length&&da()}function fa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(nt).length<2?e:t}function ga(t){return t}function ha(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ia(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function ka(t,e){for(var i in e)t[i]=r(e[i])?ka(t[i]||(t[i]={}),e[i]):e[i];return t}function la(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function ma(t){var e=t.parent||F,r=t.keyframes?ia:ha;if(s(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function pa(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function qa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function ra(t){for(var e=t;e;)e._dirty=1,e=e.parent;return t}function ua(t){return t._repeat?_t(t._tTime,t=t.duration()+t._rDelay)*t:0}function wa(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function xa(t){return t._end=aa(t._start+(t._tDur/Math.abs(t._ts||t._rts||B)||0))}function ya(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=wa(t.rawTime(),e),(!e._dur||gt(0,e.totalDuration(),r)-e._tTime>B)&&e.render(r,!0)),ra(t)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-B}}function za(t,e,r,i){return e.parent&&qa(e),e._start=aa(r+e._delay),e._end=aa(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),t._recent=e,i||ya(t,e),t}function Aa(t,e){return(at.ScrollTrigger||L("scrollTrigger",e))&&at.ScrollTrigger.create(e,t)}function Ba(t,e,r,i){return qt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&d!==Mt.frame?(ot.push(t),t._lazy=[e,i],1):void 0:1}function Ea(t,e,r){var i=t._repeat,n=aa(e)||0;return t._dur=n,t._tDur=i?i<0?1e10:aa(n*(i+1)+t._rDelay*i):n,t._time>n&&(t._time=n,t._tTime=Math.min(t._tTime,t._tDur)),r||ra(t.parent),t.parent&&xa(t),t}function Fa(t){return t instanceof Bt?ra(t):Ea(t,t._dur)}function Ha(t,e){var r,i,a=t.labels,s=t._recent||mt,o=t.duration()>=E?s.endTime(!1):t._dur;return n(e)&&(isNaN(e)||e in a)?"<"===(r=e.charAt(0))||">"===r?("<"===r?s._start:s.endTime(0<=s._repeat))+(parseFloat(e.substr(1))||0):(r=e.indexOf("="))<0?(e in a||(a[e]=o),a[e]):(i=+(e.charAt(r-1)+e.substr(r+1)),1<r?Ha(t,e.substr(0,r-1))+i:o+i):null==e?o:+e}function Ia(t,e){return t||0===t?e(t):e}function Ka(t){return(t+"").substr((parseFloat(t)+"").length)}function Na(t,e){return t&&r(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&r(t[0]))&&!t.nodeType&&t!==i}function Qa(t){return t.sort(function(){return.5-Math.random()})}function Ra(t){if(o(t))return t;var p=r(t)?t:{each:t},_=zt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,v={},e=0<m&&m<1,y=isNaN(m)||e,T=p.axis,b=m,w=m;return n(m)?b=w={center:.5,edges:.5,end:1}[m]||0:!e&&y&&(b=m[0],w=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||p).length,c=v[d];if(!c){if(!(f="auto"===p.grid?0:(p.grid||[1,E])[1])){for(h=-E;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(c=v[d]=[],i=y?Math.min(f,d)*b-.5:m%f,n=y?d*w/f-.5:m/f|0,l=E,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=T?Math.abs("y"===T?s:a):V(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&Qa(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(p.amount)||parseFloat(p.each)*(d<f?d-1:T?"y"===T?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),c.b=d<0?g-d:g,c.u=Ka(p.amount||p.each)||0,_=_&&d<0?Dt(_):_}return d=(c[t]-c.min)/c.max||0,aa(c.b+(_?_(d):d)*c.v)+c.u}}function Sa(e){var r=e<1?Math.pow(10,(e+"").length-2):1;return function(t){return Math.floor(Math.round(parseFloat(t)/e)*e*r)/r+(p(t)?0:Ka(t))}}function Ta(u,t){var h,l,e=W(u);return!e&&r(u)&&(h=e=u.radius||E,u.values?(u=yt(u.values),(l=!p(u[0]))&&(h*=h)):u=Sa(u.increment)),Ia(t,e?o(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=E,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||p(t)?s:s+Ka(t)}:Sa(u))}function Ua(t,e,r,i){return Ia(W(t)?!e:!0===r?!!(r=0):!i,function(){return W(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t+Math.random()*(e-t))/r)*r*i)/i})}function Ya(e,r,t){return Ia(t,function(t){return e[~~r(t)]})}function _a(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?nt:G),s+=t.substr(a,e-a)+Ua(n?r:+r[0],+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function cb(t,e,r){var i,n,a,s=t.labels,o=E;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function eb(t){return qa(t),t.progress()<1&&bt(t,"onInterrupt"),t}function jb(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*wt+.5|0}function kb(t,e,r){var i,n,a,s,o,u,h,l,f,d,c=t?p(t)?[t>>16,t>>8&wt,t&wt]:0:xt.black;if(!c){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),xt[t])c=xt[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a),c=[(t=parseInt(t.substr(1),16))>>16,t>>8&wt,t&wt];else if("hsl"===t.substr(0,3))if(c=d=t.match(G),e){if(~t.indexOf("="))return c=t.match(J),r&&c.length<4&&(c[3]=1),c}else s=+c[0]%360/360,o=c[1]/100,i=2*(u=c[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<c.length&&(c[3]*=1),c[0]=jb(s+1/3,i,n),c[1]=jb(s,i,n),c[2]=jb(s-1/3,i,n);else c=t.match(G)||xt.transparent;c=c.map(Number)}return e&&!d&&(i=c[0]/wt,n=c[1]/wt,a=c[2]/wt,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),c[0]=~~(s+.5),c[1]=~~(100*o+.5),c[2]=~~(100*u+.5)),r&&c.length<4&&(c[3]=1),c}function lb(t){var r=[],i=[],n=-1;return t.split(kt).forEach(function(t){var e=t.match(tt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function mb(t,e,r){var i,n,a,s,o="",u=(t+o).match(kt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=kb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=lb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(kt,"1").split(tt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(kt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function pb(t){var e,r=t.join(" ");if(kt.lastIndex=0,kt.test(r))return e=Ot.test(r),t[1]=mb(t[1],e),t[0]=mb(t[0],e,lb(t[1])),!0}function xb(t){var e=(t+"").split("("),r=Pt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(At,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:rt.exec(t)[1].split(",").map(fa)):Pt._CE&&St.test(t)?Pt._CE("",t):r}function zb(t,e){for(var r,i=t._first;i;)i instanceof Bt?zb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?zb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Bb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return _(t,function(t){for(var e in Pt[t]=at[t]=a,Pt[n=t.toLowerCase()]=r,a)Pt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Pt[t+"."+e]=a[e]}),a}function Cb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Db(r,t,e){function el(t){return 1===t?1:i*Math.pow(2,-10*t)*Q((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/I*(Math.asin(1/i)||0),s="out"===r?el:"in"===r?function(t){return 1-el(1-t)}:Cb(el);return n=I/n,s.config=function(t,e){return Db(r,t,e)},s}function Eb(e,r){function ml(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?ml:"in"===e?function(t){return 1-ml(1-t)}:Cb(ml);return t.config=function(t){return Eb(e,t)},t}var F,i,a,h,l,f,d,c,m,g,v,y,T,b,w,x,k,C,P,S,A,D,z,U={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},R={duration:.5,overwrite:!1,delay:0},E=1e8,B=1/E,I=2*Math.PI,H=I/4,X=0,V=Math.sqrt,j=Math.cos,Q=Math.sin,W=Array.isArray,G=/(?:-?\.?\d|\.)+/gi,J=/[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,tt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,et=/[-+=.]*\d+(?:\.|e-|e)*\d*/gi,rt=/\(([^()]+)\)/i,it=/[+-]=-?[\.\d]+/,nt=/[#\-+.]*\b[a-z\d-=+%.]+/gi,at={},st={},ot=[],ut={},ht={},lt={},ft=30,dt=[],ct="",pt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},_t=function _animationCycle(t,e){return(t/=e)&&~~t===t?~~t-1:~~t},mt={_start:0,endTime:O},gt=function _clamp(t,e,r){return r<t?t:e<r?e:r},vt=[].slice,yt=function toArray(t,e){return!n(t)||e||!a&&Ct()?W(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return n(t)&&!e||Na(t,1)?r.push.apply(r,yt(t)):r.push(t)})||r}(t,e):Na(t)?vt.call(t,0):t?[t]:[]:vt.call(h.querySelectorAll(t),0)},Tt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Ia(n,function(t){return r+((t-e)/a*s||0)})},bt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ot.length&&da(),i?s.apply(n,i):s.call(n)},wt=255,xt={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},kt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(t in xt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Ot=/hsl[a]?\(/,Mt=(b=Date.now,w=500,x=33,k=b(),C=k,S=P=1/240,T={time:0,frame:0,tick:function tick(){gk(!0)},wake:function wake(){f&&(!a&&t()&&(i=a=window,h=i.document||{},at.gsap=ie,(i.gsapVersions||(i.gsapVersions=[])).push(ie.version),K(l||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),g&&T.sleep(),v=y||function(t){return setTimeout(t,1e3*(S-T.time)+1|0)},m=1,gk(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(g),m=0,v=O},lagSmoothing:function lagSmoothing(t,e){w=t||1e8,x=Math.min(e,w,0)},fps:function fps(t){P=1/(t||240),S=T.time+P},add:function add(t){A.indexOf(t)<0&&A.push(t),Ct()},remove:function remove(t){var e;~(e=A.indexOf(t))&&A.splice(e,1)},_listeners:A=[]}),Ct=function _wake(){return!m&&Mt.wake()},Pt={},St=/^[\d.\-M][\d.\-,\s]/,At=/["']/g,Dt=function _invertEase(e){return function(t){return 1-e(1-t)}},zt=function _parseEase(t,e){return t&&(o(t)?t:Pt[t]||xb(t))||e};function gk(e){var t,r,i=b()-C,n=!0===e;w<i&&(k+=i-x),C+=i,T.time=(C-k)/1e3,(0<(t=T.time-S)||n)&&(T.frame++,S+=t+(P<=t?.004:P-t),r=1),n||(g=v(gk)),r&&A.forEach(function(t){return t(T.time,i,T.frame,e)})}function Dl(t){return t<z?D*t*t:t<.7272727272727273?D*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?D*(t-=2.25/2.75)*t+.9375:D*Math.pow(t-2.625/2.75,2)+.984375}_("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Bb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Pt.Linear.easeNone=Pt.none=Pt.Linear.easeIn,Bb("Elastic",Db("in"),Db("out"),Db()),D=7.5625,z=1/2.75,Bb("Bounce",function(t){return 1-Dl(1-t)},Dl),Bb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Bb("Circ",function(t){return-(V(1-t*t)-1)}),Bb("Sine",function(t){return 1===t?1:1-j(t*H)}),Bb("Back",Eb("in"),Eb("out"),Eb()),Pt.SteppedEase=Pt.steps=at.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*gt(0,.99999999,t)|0)+n)*r}}},R.ease=Pt["quad.out"],_("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return ct+=t+","+t+"Params,"});var Et,Ft=function GSCache(t,e){this.id=X++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:$,this.set=e?e.getSetter:Zt},Rt=((Et=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Et.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Et.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ea(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Et.totalTime=function totalTime(t,e){if(Ct(),!arguments.length)return this._tTime;var r=this.parent||this._dp;if(r&&r.smoothChildTiming&&this._ts){for(this._start=aa(r._time-(0<this._ts?t/this._ts:((this._dirty?this.totalDuration():this._tDur)-t)/-this._ts)),xa(this),r._dirty||ra(r);r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&za(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===B||!t&&!this._initted)&&(this._ts||(this._pTime=t),ea(this,t,e)),this},Et.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+ua(this))%this._dur||(t?this._dur:0),e):this._time},Et.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Et.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+ua(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Et.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?_t(this._tTime,r)+1:1},Et.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-B?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?wa(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-B?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(gt(0,this._tDur,e),!0))},Et.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ct(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&(this._tTime-=B)&&Math.abs(this._zTime)!==B))),this):this._ps},Et.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||za(e,this,t-this._delay),this}return this._start},Et.endTime=function endTime(t){return this._start+(s(t)?this.totalDuration():this.duration())/Math.abs(this._ts)},Et.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wa(e.rawTime(t),this):this._tTime:this._tTime},Et.repeat=function repeat(t){return arguments.length?(this._repeat=t,Fa(this)):this._repeat},Et.repeatDelay=function repeatDelay(t){return arguments.length?(this._rDelay=t,Fa(this)):this._rDelay},Et.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Et.seek=function seek(t,e){return this.totalTime(Ha(this,t),s(e))},Et.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,s(e))},Et.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Et.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Et.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Et.resume=function resume(){return this.paused(!1)},Et.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-B:0)),this):this._rts<0},Et.invalidate=function invalidate(){return this._initted=0,this._zTime=-B,this},Et.isActive=function isActive(t){var e,r=this.parent||this._dp,i=this._start;return!(r&&!(this._ts&&(this._initted||!t)&&r.isActive(t)&&(e=r.rawTime(!0))>=i&&e<this.endTime(!0)-B))},Et.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Et.then=function then(t){var i=this;return new Promise(function(e){function Sm(){var t=i.then;i.then=null,o(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=o(t)?t:ga;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Sm():i._prom=Sm})},Et.kill=function kill(){eb(this)},Animation);function Animation(t,e){var r=t.parent||F;this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ea(this,+t.duration,1),this.data=t.data,m||Mt.wake(),r&&za(r,this,e||0===e?e:r._time,1),t.reversed&&this.reverse(),t.paused&&this.paused(!0)}ha(Rt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-B,_prom:0,_ps:!1,_rts:1});var Bt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t,e)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=s(t.sortChildren),r.parent&&ya(r.parent,_assertThisInitialized(r)),t.scrollTrigger&&Aa(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var t=Timeline.prototype;return t.to=function to(t,e,r,i){return new Ht(t,ca(arguments,0,this),Ha(this,p(e)?i:r)),this},t.from=function from(t,e,r,i){return new Ht(t,ca(arguments,1,this),Ha(this,p(e)?i:r)),this},t.fromTo=function fromTo(t,e,r,i,n){return new Ht(t,ca(arguments,2,this),Ha(this,p(e)?n:i)),this},t.set=function set(t,e,r){return e.duration=0,e.parent=this,ma(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Ht(t,e,Ha(this,r),1),this},t.call=function call(t,e,r){return za(this,Ht.delayedCall(0,t,e),Ha(this,r))},t.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Ht(t,r,Ha(this,n)),this},t.staggerFrom=function staggerFrom(t,e,r,i,n,a,o){return r.runBackwards=1,ma(r).immediateRender=s(r.immediateRender),this.staggerTo(t,e,r,i,n,a,o)},t.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,o,u){return i.startAt=r,ma(i).immediateRender=s(i.immediateRender),this.staggerTo(t,e,i,n,a,o,u)},t.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=this!==F&&m-B<t&&0<=t?m:t<B?0:t,y=this._zTime<0!=t<0&&(this._initted||!g);if(v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat&&(c=this._yoyo,o=g+this._rDelay,(g<(i=aa(v%o))||m===v)&&(i=g),(s=~~(v/o))&&s===v/o&&(i=g,s--),d=_t(this._tTime,o),!_&&this._tTime&&d!==s&&(d=s),c&&1&s&&(i=g-i,p=1),s!==d&&!this._lock)){var T=c&&1&d,b=T===(c&&1&s);if(s<d&&(T=!T),_=T?0:g,this._lock=1,this.render(_||(p?0:aa(s*o)),e,!g)._lock=0,!e&&this.parent&&bt(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_!==this._time||u!=!this._ts)return this;if(b&&(this._lock=2,_=T?g+1e-4:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;zb(this,p)}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,aa(_),aa(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t),_||!i||e||bt(this,"onStart"),_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-B);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-B:B);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-B)._zTime=_<=i?1:-1,this._ts))return this._start=f,xa(this),this.render(t,e,r);this._onUpdate&&!e&&bt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||qa(this,1),e||t<0&&!_||!v&&!_||(bt(this,v===m?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},t.add=function add(t,e){var r=this;if(p(e)||(e=Ha(this,e)),!(t instanceof Rt)){if(W(t))return t.forEach(function(t){return r.add(t,e)}),ra(this);if(n(t))return this.addLabel(t,e);if(!o(t))return this;t=Ht.delayedCall(0,t)}return this!==t?za(this,t,e):this},t.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-E);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Ht?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},t.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},t.remove=function remove(t){return n(t)?this.removeLabel(t):o(t)?this.killTweensOf(t):(pa(this,t),t===this._recent&&(this._recent=this._last),ra(this))},t.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,this.parent||this._dp||!this._ts||(this._start=aa(Mt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},t.addLabel=function addLabel(t,e){return this.labels[t]=Ha(this,e),this},t.removeLabel=function removeLabel(t){return delete this.labels[t],this},t.addPause=function addPause(t,e,r){var i=Ht.delayedCall(0,e||O,r);return i.data="isPause",this._hasPause=1,za(this,i,Ha(this,t))},t.removePause=function removePause(t){var e=this._first;for(t=Ha(this,t);e;)e._start===t&&"isPause"===e.data&&qa(e),e=e._next},t.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)It!==i[n]&&i[n].kill(t,e);return this},t.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=yt(t),a=this._first;a;)a instanceof Ht?!ba(a._targets,n)||e&&!a.isActive("started"===e)||i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},t.tweenTo=function tweenTo(t,e){e=e||{};var r=this,i=Ha(r,t),n=e.startAt,a=e.onStart,s=e.onStartParams,o=Ht.to(r,ha(e,{ease:"none",lazy:!1,time:i,duration:e.duration||Math.abs((i-(n&&"time"in n?n.time:r._time))/r.timeScale())||B,onStart:function onStart(){r.pause();var t=e.duration||Math.abs((i-r._time)/r.timeScale());o._dur!==t&&Ea(o,t).render(o._time,!0,!0),a&&a.apply(o,s||[])}}));return o},t.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ha({startAt:{time:Ha(this,t)}},r))},t.recent=function recent(){return this._recent},t.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),cb(this,Ha(this,t))},t.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),cb(this,Ha(this,t),1)},t.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+B)},t.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return ra(this)},t.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return i.prototype.invalidate.call(this)},t.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._time=this._tTime=this._pTime=0,t&&(this.labels={}),ra(this)},t.totalDuration=function totalDuration(t){var e,r,i,n,a=0,s=this,o=s._last,u=E;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-t:t));if(s._dirty){for(n=s.parent;o;)e=o._prev,o._dirty&&o.totalDuration(),u<(i=o._start)&&s._sort&&o._ts&&!s._lock?(s._lock=1,za(s,o,i-o._delay,1)._lock=0):u=i,i<0&&o._ts&&(a-=i,(!n&&!s._dp||n&&n.smoothChildTiming)&&(s._start+=i/s._ts,s._time-=i,s._tTime-=i),s.shiftChildren(-i,!1,-Infinity),u=0),a<(r=xa(o))&&o._ts&&(a=r),o=e;Ea(s,s===F&&s._time>a?s._time:a,1),s._dirty=0}return s._tDur},Timeline.updateRoot=function updateRoot(t){if(F._ts&&(ea(F,wa(t,F)),d=Mt.frame),Mt.frame>=ft){ft+=U.autoSleep||120;var e=F._first;if((!e||!e._ts)&&U.autoSleep&&Mt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Mt.sleep()}}},Timeline}(Rt);ha(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Lb(t,e,i,a,s,u){var h,l,f,d;if(ht[t]&&!1!==(h=new ht[t]).init(s,h.rawVars?e[t]:function _processVars(t,e,i,a,s){if(o(t)&&(t=Yt(t,s,e,i,a)),!r(t)||t.style&&t.nodeType||W(t))return n(t)?Yt(t,s,e,i,a):t;var u,h={};for(u in t)h[u]=Yt(t[u],s,e,i,a);return h}(e[t],a,s,u,i),i,a,u)&&(i._pt=l=new ee(i._pt,s,t,0,1,h.render,h,0,h.priority),i!==c))for(f=i._ptLookup[i._targets.indexOf(s)],d=h._props.length;d--;)f[h._props[d]]=l;return h}var It,Lt=function _addPropTween(t,e,r,i,a,s,u,h,l){o(i)&&(i=i(a||0,t,s));var f,d=t[e],c="get"!==r?r:o(d)?l?t[e.indexOf("set")||!o(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,p=o(d)?l?jt:Vt:Xt;if(n(i)&&(~i.indexOf("random(")&&(i=_a(i)),"="===i.charAt(1)&&(i=parseFloat(c)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Ka(c)||0))),c!==i)return isNaN(c+i)?(d||e in t||L(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new ee(this._pt,t,e,0,1,Wt,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=_a(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(et)||[];o=et.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=et.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(it.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,c,i,p,h||U.stringFilter,l)):(f=new ee(this._pt,t,e,+c||0,i-(c||0),"boolean"==typeof d?Qt:Kt,0,p),l&&(f.fp=l),u&&f.modifier(u,this,t),this._pt=f)},qt=function _initTween(t,e){var r,i,n,a,o,u,h,l,f,d,c,p,_=t.vars,m=_.ease,g=_.startAt,v=_.immediateRender,y=_.lazy,T=_.onUpdate,b=_.onUpdateParams,w=_.callbackScope,x=_.runBackwards,k=_.yoyoEase,O=_.keyframes,M=_.autoRevert,C=t._dur,P=t._startAt,S=t._targets,A=t.parent,D=A&&"nested"===A.data?A.parent._targets:S,z="auto"===t._overwrite,E=t.timeline;if(!E||O&&m||(m="none"),t._ease=zt(m,R.ease),t._yEase=k?Dt(zt(!0===k?m:k,R.ease)):0,k&&t._yoyo&&!t._repeat&&(k=t._yEase,t._yEase=t._ease,t._ease=k),!E){if(p=(l=S[0]?Z(S[0]).harness:0)&&_[l.prop],r=la(_,st),P&&P.render(-1,!0).kill(),g){if(qa(t._startAt=Ht.set(S,ha({data:"isStart",overwrite:!1,parent:A,immediateRender:!0,lazy:s(y),startAt:null,delay:0,onUpdate:T,onUpdateParams:b,callbackScope:w,stagger:0},g))),v)if(0<e)M||(t._startAt=0);else if(C)return}else if(x&&C)if(P)M||(t._startAt=0);else if(e&&(v=!1),n=pt(r,{overwrite:!1,data:"isFromStart",lazy:v&&s(y),immediateRender:v,stagger:0,parent:A}),p&&(n[l.prop]=p),qa(t._startAt=Ht.set(S,n)),v){if(!e)return}else _initTween(t._startAt,B);for(t._pt=0,y=C&&s(y)||y&&!C,i=0;i<S.length;i++){if(h=(o=S[i])._gsap||Y(S)[i]._gsap,t._ptLookup[i]=d={},ut[h.id]&&da(),c=D===S?i:D.indexOf(o),l&&!1!==(f=new l).init(o,p||r,t,c,D)&&(t._pt=a=new ee(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=a}),f.priority&&(u=1)),!l||p)for(n in r)ht[n]&&(f=Lb(n,r,t,c,o,D))?f.priority&&(u=1):d[n]=a=Lt.call(t,o,n,"get",r[n],c,D,0,_.stringFilter);t._op&&t._op[i]&&t.kill(o,t._op[i]),z&&t._pt&&(It=t,F.killTweensOf(o,d,"started"),It=0),t._pt&&y&&(ut[h.id]=1)}u&&te(t),t._onInit&&t._onInit(t)}t._from=!E&&!!_.runBackwards,t._onUpdate=T,t._initted=1},Yt=function _parseFuncOrString(t,e,r,i,a){return o(t)?t.call(e,r,i,a):n(t)&&~t.indexOf("random(")?_a(t):t},Nt=ct+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Ut=(Nt+",id,stagger,delay,duration,paused,scrollTrigger").split(","),Ht=function(D){function Tween(t,e,i,n){var a;"number"==typeof e&&(i.duration=e,e=i,i=null);var o,h,l,f,d,c,_,m,g=(a=D.call(this,n?e:ma(e),i)||this).vars,v=g.duration,y=g.delay,T=g.immediateRender,b=g.stagger,w=g.overwrite,x=g.keyframes,k=g.defaults,C=g.scrollTrigger,P=g.yoyoEase,S=a.parent,A=(W(t)?p(t[0]):"length"in e)?[t]:yt(t);if(a._targets=A.length?Y(A):M("GSAP target "+t+" not found. https://greensock.com",!U.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=w,x||b||u(v)||u(y)){if(e=a.vars,(o=a.timeline=new Bt({data:"nested",defaults:k||{}})).kill(),o.parent=_assertThisInitialized(a),x)ha(o.vars.defaults,{ease:"none"}),x.forEach(function(t){return o.to(A,t,">")});else{if(f=A.length,_=b?Ra(b):O,r(b))for(d in b)~Nt.indexOf(d)&&((m=m||{})[d]=b[d]);for(h=0;h<f;h++){for(d in l={},e)Ut.indexOf(d)<0&&(l[d]=e[d]);l.stagger=0,P&&(l.yoyoEase=P),m&&pt(l,m),c=A[h],l.duration=+Yt(v,_assertThisInitialized(a),h,c,A),l.delay=(+Yt(y,_assertThisInitialized(a),h,c,A)||0)-a._delay,!b&&1===f&&l.delay&&(a._delay=y=l.delay,a._start+=y,l.delay=0),o.to(c,l,_(h,c,A))}o.duration()?v=y=0:a.timeline=0}v||a.duration(v=o.duration())}else a.timeline=0;return!0===w&&(It=_assertThisInitialized(a),F.killTweensOf(A),It=0),S&&ya(S,_assertThisInitialized(a)),(T||!v&&!x&&a._start===aa(S._time)&&s(T)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==S.data)&&(a._tTime=-B,a.render(Math.max(0,-y))),C&&Aa(_assertThisInitialized(a),C),a}_inheritsLoose(Tween,D);var t=Tween.prototype;return t.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=c-B<t&&0<=t?c:t<B?0:t;if(p){if(_!==this._tTime||!t||r||this._startAt&&this._zTime<0!=t<0){if(i=_,l=this.timeline,this._repeat){if(s=p+this._rDelay,(p<(i=aa(_%s))||c===_)&&(i=p),(a=~~(_/s))&&a===_/s&&(i=p,a--),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=_t(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(l&&this._yEase&&zb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(aa(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ba(this,i,r,e))return this._tTime=0,this;if(p!==this._dur)return this.render(t,e,r)}for(this._tTime=_,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),!i||d||e||bt(this,"onStart"),n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-B:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),bt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&bt(this,"onRepeat"),_!==this._tDur&&_||this._tTime!==_||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,r),!t&&p||!(_===this._tDur&&0<this._ts||!_&&this._ts<0)||qa(this,1),e||t<0&&!d||!_&&!d||(bt(this,_===c?"onComplete":"onReverseComplete",!0),!this._prom||_<c&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s=t.ratio,o=e<0||s&&!e&&!t._start&&!t._dp._lock?0:1,u=t._rDelay,h=0;if(u&&t._repeat&&(h=gt(0,t._tDur,e),_t(h,u)!==(a=_t(t._tTime,u))&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),t._initted||!Ba(t,e,i,r))if(o!==s||i||t._zTime===B||!e&&t._zTime){for(a=t._zTime,t._zTime=e||(r?B:0),r=r||e&&!a,t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=h,r||bt(t,"onStart"),n=t._pt;n;)n.r(o,n.d),n=n._next;!o&&t._startAt&&!t._onUpdate&&t._start&&t._startAt.render(e,!0,i),t._onUpdate&&!r&&bt(t,"onUpdate"),h&&t._repeat&&!r&&t.parent&&bt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&qa(t,1),r||(bt(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},t.targets=function targets(){return this._targets},t.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._act=this._lazy=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),D.prototype.invalidate.call(this)},t.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e)&&(this._lazy=0,this.parent))return eb(this);if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,It&&!0!==It.vars.overwrite)._first||eb(this),this.parent&&r!==this.timeline.totalDuration()&&Ea(this,this._dur*this.timeline._tDur/r),this}var i,a,s,o,u,h,l,f=this._targets,d=t?yt(t):f,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return eb(this);for(i=this._op=this._op||[],"all"!==e&&(n(e)&&(u={},_(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?Z(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=pt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in a=c[l],"all"===e?(i[l]=e,o=a,s={}):(s=i[l]=i[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||pa(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&p&&eb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return new Tween(t,ca(arguments,1))},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return new Tween(t,ca(arguments,2))},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return F.killTweensOf(t,e,r)},Tween}(Rt);ha(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),_("staggerTo,staggerFrom,staggerFromTo",function(r){Ht[r]=function(){var t=new Bt,e=vt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function Wb(t,e,r){return t.setAttribute(e,r)}function cc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Xt=function _setterPlain(t,e,r){return t[e]=r},Vt=function _setterFunc(t,e,r){return t[e](r)},jt=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Zt=function _getSetter(t,e){return o(t[e])?Vt:q(t[e])&&t.setAttribute?Wb:Xt},Kt=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4,e)},Qt=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Wt=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},Gt=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},$t=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},Jt=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?pa(this,i,"_pt"):i.dep||(e=1),i=r;return!e},te=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ee=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=cc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Kt,this.d=s||this,this.set=o||Xt,this.pr=u||0,(this._next=t)&&(t._prev=this)}_(ct+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return st[t]=1}),at.TweenMax=at.TweenLite=Ht,at.TimelineLite=at.TimelineMax=Bt,F=new Bt({sortChildren:!1,defaults:R,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),U.stringFilter=pb;var re={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=o(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:O,render:Gt,add:Lt,kill:Jt,modifier:$t,rawVars:0},a={targetTest:0,get:0,getSetter:Zt,aliases:{},register:0};if(Ct(),t!==i){if(ht[e])return;ha(i,ha(la(t,n),a)),pt(i.prototype,pt(n,la(t,a))),ht[i.prop=e]=i,t.targetTest&&(dt.push(i),st[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}N(e,i),t.register&&t.register(ie,i,ee)}(t)})},timeline:function timeline(t){return new Bt(t)},getTweensOf:function getTweensOf(t,e){return F.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){n(i)&&(i=yt(i)[0]);var a=Z(i||{}).get,s=e?ga:fa;return"native"===e&&(e=""),i?t?s((ht[t]&&ht[t].get||a)(i,t,e,r)):function(t,e,r){return s((ht[t]&&ht[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=yt(r)).length){var n=r.map(function(t){return ie.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ht[e],o=Z(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;c._pt=0,e.init(r,i?t+i:t,c,0,[r]),e.render(1,e),c._pt&&Gt(1,c)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<F.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=zt(t.ease,R.ease)),ka(R,t||{})},config:function config(t){return ka(U,t||{})},registerEffect:function registerEffect(t){var n=t.name,i=t.effect,e=t.plugins,a=t.defaults,s=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ht[t]&&!at[t]&&M(n+" effect requires "+t+" plugin.")}),lt[n]=function(t,e,r){return i(yt(t),ha(e||{},a),r)},s&&(Bt.prototype[n]=function(t,e,i){return this.add(lt[n](t,r(e)?e:(i=e)&&{},this),i)})},registerEase:function registerEase(t,e){Pt[t]=zt(e)},parseEase:function parseEase(t,e){return arguments.length?zt(t,e):Pt},getById:function getById(t){return F.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Bt(t);for(n.smoothChildTiming=s(t.smoothChildTiming),F.remove(n),n._dp=0,n._time=n._tTime=F._time,r=F._first;r;)i=r._next,!e&&!r._dur&&r instanceof Ht&&r.vars.onComplete===r._targets[0]||za(n,r,r._start-r._delay),r=i;return za(F,n,0),n},utils:{wrap:function wrap(e,t,r){var i=t-e;return W(e)?Ya(e,wrap(0,e.length),t):Ia(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return W(e)?Ya(e,wrapYoyo(0,e.length-1),t):Ia(r,function(t){return e+(i<(t=(n+(t-e)%n)%n)?n-t:t)})},distribute:Ra,random:Ua,snap:Ta,normalize:function normalize(t,e,r){return Tt(t,e,0,1,r)},getUnit:Ka,clamp:function clamp(e,r,t){return Ia(t,function(t){return gt(e,r,t)})},splitColor:kb,toArray:yt,mapRange:Tt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ka(t))}},interpolate:function interpolate(e,r,t,i){var a=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!a){var s,o,u,h,l,f=n(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(W(e)&&!W(r)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=pt(W(e)?[]:{},e));if(!u){for(s in r)Lt.call(d,e,s,"get",r[s]);a=function func(t){return Gt(t,d)||(f?e.p:e)}}}return Ia(t,a)},shuffle:Qa},install:K,effects:lt,ticker:Mt,updateRoot:Bt.updateRoot,plugins:ht,globalTimeline:F,core:{PropTween:ee,globals:N,Tween:Ht,Timeline:Bt,Animation:Rt,getCache:Z,_removeLinkedListItem:pa}};_("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return re[t]=Ht[t]}),Mt.add(Bt.updateRoot),c=re.to({},{duration:0});function gc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function ic(t,a){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(n(i)&&(e={},_(i,function(t){return e[t]=1}),i=e),a){for(r in e={},i)e[r]=a(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=gc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var ie=re.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s;for(a in e)(s=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a))&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},ic("roundProps",Sa),ic("modifiers"),ic("snap",Ta))||re;Ht.version=Bt.version=ie.version="3.3.1",f=1,t()&&Ct();function Tc(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Uc(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Vc(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function Wc(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function Xc(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Yc(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Zc(t,e,r){return t.style[e]=r}function $c(t,e,r){return t.style.setProperty(e,r)}function _c(t,e,r){return t._gsap[e]=r}function ad(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function bd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function cd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function gd(t,e){var r=ae.createElementNS?ae.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ae.createElement(t);return r.style?r:ae.createElement(t)}function hd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Fe,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&hd(t,Ne(e)||e,1)||""}function kd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(ne=window,ae=ne.document,se=ae.documentElement,ue=gd("div")||{style:{}},he=gd("div"),Le=Ne(Le),qe=Ne(qe),ue.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fe=!!Ne("perspective"),oe=1)}function ld(t){var e,r=gd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(se.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=ld}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),se.removeChild(r),this.style.cssText=a,e}function md(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function nd(e){var r;try{r=e.getBBox()}catch(t){r=ld.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===ld||(r=ld.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+md(e,["x","cx","x1"])||0,y:+md(e,["y","cy","y1"])||0,width:0,height:0}}function od(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!nd(t))}function pd(t,e){if(e){var r=t.style;e in Ae&&(e=Le),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Fe,"-$1").toLowerCase())):r.removeAttribute(e)}}function qd(t,e,r,i,n,a){var s=new ee(t._pt,e,r,0,1,a?Yc:Xc);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function sd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=ue.style,f=Re.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;return i===h||!u||Ue[i]||Ue[h]?u:("px"===h||p||(u=sd(t,e,r,"px")),o=t.getCTM&&od(t),_&&(Ae[e]||~e.indexOf("adius"))?aa(u/(o?t.getBBox()[f?"width":"height"]:t[c])*100):(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==ae&&a.appendChild||(a=ae.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Mt.time?aa(u/s.width*100):(!_&&"%"!==h||(l.position=hd(t,"position")),a===t&&(l.position="static"),a.appendChild(ue),n=ue[c],a.removeChild(ue),l.position="absolute",f&&_&&((s=Z(a)).time=Mt.time,s.width=a[c]),aa(p?n*u/100:n&&u?100/n*u:0))))}function td(t,e,r,i){var n;return oe||kd(),e in Ie&&"transform"!==e&&~(e=Ie[e]).indexOf(",")&&(e=e.split(",")[0]),Ae[e]&&"transform"!==e?(n=Ze(t,i),n="transformOrigin"!==e?n[e]:Ke(hd(t,qe))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Xe[e]&&Xe[e](t,e,r)||hd(t,e)||$(t,e)||("opacity"===e?1:0)),r&&!~(n+"").indexOf(" ")?sd(t,e,n,r)+r:n}function ud(t,e,r,i){if(!r||"none"===r){var n=Ne(e,t,1),a=n&&hd(t,n,1);a&&a!==r&&(e=n,r=a)}var s,o,u,h,l,f,d,c,p,_,m,g,v=new ee(this._pt,t.style,e,0,1,Wt),y=0,T=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=hd(t,e)||i,t.style[e]=r),pb(s=[r,i]),i=s[1],u=(r=s[0]).match(tt)||[],(i.match(tt)||[]).length){for(;o=tt.exec(i);)d=o[0],p=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[T++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),c=parseFloat(d),_=d.substr((c+"").length),y=tt.lastIndex-_.length,_||(_=_||U.units[e]||m,y===i.length&&(i+=_,v.e+=_)),m!==_&&(h=sd(t,e,f,_)||0),v._pt={_next:v._pt,p:p||1===T?p:",",s:h,c:g?g*c:c-h,m:l&&l<4?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?Yc:Xc;return it.test(i)&&(v.e=0),this._pt=v}function wd(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=He[r]||r,e[1]=He[i]||i,e.join(" ")}function xd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],Ae[r]&&(i=1,r="transformOrigin"===r?qe:Le),pd(a,r);i&&(pd(a,Le),u&&(u.svg&&a.removeAttribute("transform"),Ze(a,1),u.uncache=1))}}function Bd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Cd(t){var e=hd(t,Le);return Bd(e)?Ve:e.substr(7).match(J).map(aa)}function Dd(t,e){var r,i,n,a,s=t._gsap||Z(t),o=t.style,u=Cd(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?Ve:u:(u!==Ve||t.offsetParent||t===se||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&ae.body.contains(t)||(a=1,i=t.nextSibling,se.appendChild(t)),u=Cd(t),n?o.display=n:pd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):se.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Ed(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Dd(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==Ve&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=nd(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-d,h.xOffset=c+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[qe]="0px 0px",a&&(qd(a,h,"xOrigin",f,w),qd(a,h,"yOrigin",d,x),qd(a,h,"xOffset",c,h.xOffset),qd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Hd(t,e,r){var i=Ka(e);return aa(parseFloat(e)+parseFloat(sd(t,"x",r+"px",i)))+i}function Od(t,e,r,i,a,s){var o,u,h=360,l=n(a),f=parseFloat(a)*(l&&~a.indexOf("rad")?De:1),d=s?f*s:f-i,c=i+d+"deg";return l&&("short"===(o=a.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===o&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===o&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ee(t._pt,e,r,i,d,Uc),u.e=c,u.u="deg",t._props.push(r),u}function Pd(t,e,r){var i,n,a,s,o,u,h,l=he.style,f=r._gsap;for(n in l.cssText=getComputedStyle(r).cssText+";position:absolute;display:block;",l[Le]=e,ae.body.appendChild(he),i=Ze(he,1),Ae)(a=f[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ka(a)!==(h=Ka(s))?sd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ee(t._pt,f,n,o,u-o,Tc),t._pt.u=h||0,t._props.push(n));ae.body.removeChild(he)}var ne,ae,se,oe,ue,he,le,fe,de=Pt.Power0,ce=Pt.Power1,pe=Pt.Power2,_e=Pt.Power3,me=Pt.Power4,ge=Pt.Linear,ve=Pt.Quad,ye=Pt.Cubic,Te=Pt.Quart,be=Pt.Quint,we=Pt.Strong,xe=Pt.Elastic,ke=Pt.Back,Oe=Pt.SteppedEase,Me=Pt.Bounce,Ce=Pt.Sine,Pe=Pt.Expo,Se=Pt.Circ,Ae={},De=180/Math.PI,ze=Math.PI/180,Ee=Math.atan2,Fe=/([A-Z])/g,Re=/(?:left|right|width|margin|padding|x)/i,Be=/[\s,\(]\S/,Ie={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Le="transform",qe=Le+"Origin",Ye="O,Moz,ms,Ms,Webkit".split(","),Ne=function _checkPropPrefix(t,e,r){var i=(e||ue).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(Ye[n]+t in i););return n<0?null:(3===n?"ms":0<=n?Ye[n]:"")+t},Ue={deg:1,rad:1,turn:1},He={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Xe={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ee(t._pt,e,r,0,0,xd);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},Ve=[1,0,0,1,0,0],je={},Ze=function _parseTransform(t,e){var r=t._gsap||new Ft(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w,x,k,O,M,C,P,S,A,D,z,E,F,R=t.style,B=r.scaleX<0,I="deg",L=hd(t,qe)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!od(t)),m=Dd(t,r.svg),r.svg&&(M=!r.uncache&&t.getAttribute("data-svg-origin"),Ed(t,M||L,!!M||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==Ve&&(T=m[0],b=m[1],w=m[2],x=m[3],i=k=m[4],n=O=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?Ee(b,T)*De:0,(f=w||x?Ee(w,x)*De+u:0)&&(o*=Math.cos(f*ze)),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(F=m[6],z=m[7],S=m[8],A=m[9],D=m[10],E=m[11],i=m[12],n=m[13],a=m[14],h=(g=Ee(F,D))*De,g&&(M=k*(v=Math.cos(-g))+S*(y=Math.sin(-g)),C=O*v+A*y,P=F*v+D*y,S=k*-y+S*v,A=O*-y+A*v,D=F*-y+D*v,E=z*-y+E*v,k=M,O=C,F=P),l=(g=Ee(-w,D))*De,g&&(v=Math.cos(-g),E=x*(y=Math.sin(-g))+E*v,T=M=T*v-S*y,b=C=b*v-A*y,w=P=w*v-D*y),u=(g=Ee(b,T))*De,g&&(M=T*(v=Math.cos(g))+b*(y=Math.sin(g)),C=k*v+O*y,b=b*v-T*y,O=O*v-k*y,T=M,k=C),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=aa(Math.sqrt(T*T+b*b+w*w)),o=aa(Math.sqrt(O*O+F*F)),g=Ee(k,O),f=2e-4<Math.abs(g)?g*De:0,c=E?1/(E<0?-E:E):0),r.svg&&(M=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!Bd(hd(t,Le)),M&&t.setAttribute("transform",M))),90<Math.abs(f)&&Math.abs(f)<270&&(B?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=((r.xPercent=i&&Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)?0:i)+"px",r.y=((r.yPercent=n&&Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)?0:n)+"px",r.z=a+"px",r.scaleX=aa(s),r.scaleY=aa(o),r.rotation=aa(u)+I,r.rotationX=aa(h)+I,r.rotationY=aa(l)+I,r.skewX=f+I,r.skewY=d+I,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(L.split(" ")[2])||0)&&(R[qe]=Ke(L)),r.xOffset=r.yOffset=0,r.force3D=U.force3D,r.renderTransform=r.svg?tr:fe?Je:Qe,r.uncache=0,r},Ke=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},Qe=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Je(t,e)},We="0deg",Ge="0px",$e=") ",Je=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==We||h!==We)){var b,w=parseFloat(h)*ze,x=Math.sin(w),k=Math.cos(w);w=parseFloat(l)*ze,b=Math.cos(w),a=Hd(g,a,x*b*-v),s=Hd(g,s,-Math.sin(w)*-v),o=Hd(g,o,k*b*-v+v)}_!==Ge&&(y+="perspective("+_+$e),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Ge&&s===Ge&&o===Ge||(y+=o!==Ge||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+$e),u!==We&&(y+="rotate("+u+$e),h!==We&&(y+="rotateY("+h+$e),l!==We&&(y+="rotateX("+l+$e),f===We&&d===We||(y+="skew("+f+", "+d+$e),1===c&&1===p||(y+="scale("+c+", "+p+$e),g.style[Le]=y||"translate(0, 0)"},tr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),k=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=ze,c*=ze,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=ze,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=aa(r),i=aa(i),n=aa(n),a=aa(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||k&&!~(f+"").indexOf("px"))&&(x=sd(g,"x",l,"px"),k=sd(g,"y",f,"px")),(v||y||T||b)&&(x=aa(x+v-(v*r+y*n)+T),k=aa(k+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=aa(x+u/100*s.width),k=aa(k+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+k+")",g.setAttribute("transform",s),w&&(g.style[Le]=s)};_("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Xe[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return td(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var er,rr,ir,nr={name:"css",register:kd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T=this._props,b=t.style;for(f in oe||kd(),e)if("autoRound"!==f&&(s=e[f],!ht[f]||!Lb(f,e,r,i,t,n)))if(h=typeof s,l=Xe[f],"function"===h&&(h=typeof(s=s.call(r,i,t,n))),"string"===h&&~s.indexOf("random(")&&(s=_a(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))this.add(b,"setProperty",getComputedStyle(t).getPropertyValue(f)+"",s+"",i,n,0,0,f);else{if(a=td(t,f),u=parseFloat(a),(p="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in Ie&&("autoAlpha"===f&&(1===u&&"hidden"===td(t,"visibility")&&o&&(u=0),qd(this,b,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=Ie[f]).indexOf(",")&&(f=f.split(",")[0])),_=f in Ae)if(m||((g=t._gsap).renderTransform||Ze(t),v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new ee(this._pt,b,Le,0,1,g.renderTransform,g,0,-1)).dep=1),"scale"===f)this._pt=new ee(this._pt,g,"scaleY",g.scaleY,p?p*o:o-g.scaleY),T.push("scaleY",f),f+="X";else{if("transformOrigin"===f){s=wd(s),g.svg?Ed(t,s,0,v,0,this):((c=parseFloat(s.split(" ")[2])||0)!==g.zOrigin&&qd(this,g,"zOrigin",g.zOrigin,c),qd(this,b,f,Ke(a),Ke(s)));continue}if("svgOrigin"===f){Ed(t,s,1,v,0,this);continue}if(f in je){Od(this,g,f,u,s,p);continue}if("smoothOrigin"===f){qd(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Pd(this,s,t);continue}}else f in b||(f=Ne(f)||f);if(_||(o||0===o)&&(u||0===u)&&!Be.test(s)&&f in b)(d=(a+"").substr((u+"").length))!==(c=(s+"").substr(((o=o||0)+"").length)||(f in U.units?U.units[f]:d))&&(u=sd(t,f,a,c)),this._pt=new ee(this._pt,_?g:b,f,u,p?p*o:o-u,"px"!==c||!1===e.autoRound||_?Tc:Wc),this._pt.u=c||0,d!==c&&(this._pt.b=a,this._pt.r=Vc);else if(f in b)ud.call(this,t,f,a,s);else{if(!(f in t)){L(f,s);continue}this.add(t,f,t[f],s,i,n)}T.push(f)}y&&te(this)},get:td,aliases:Ie,getSetter:function getSetter(t,e,r){var i=Ie[e];return i&&i.indexOf(",")<0&&(e=i),e in Ae&&e!==qe&&(t._gsap.x||td(t,"x"))?r&&le===r?"scale"===e?ad:_c:(le=r||{})&&("scale"===e?bd:cd):t.style&&!q(t.style[e])?Zc:~e.indexOf("-")?$c:Zt(t,e)},core:{_removeProperty:pd,_getMatrix:Dd}};ie.utils.checkPrefix=Ne,ir=_((er="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(rr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){Ae[t]=1}),_(rr,function(t){U.units[t]="deg",je[t]=1}),Ie[ir[13]]=er+","+rr,_("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");Ie[e[1]]=ir[e[0]]}),_("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){U.units[t]="px"}),ie.registerPlugin(nr);var ar=ie.registerPlugin(nr)||ie,sr=ar.core.Tween;e.Back=ke,e.Bounce=Me,e.CSSPlugin=nr,e.Circ=Se,e.Cubic=ye,e.Elastic=xe,e.Expo=Pe,e.Linear=ge,e.Power0=de,e.Power1=ce,e.Power2=pe,e.Power3=_e,e.Power4=me,e.Quad=ve,e.Quart=Te,e.Quint=be,e.Sine=Ce,e.SteppedEase=Oe,e.Strong=we,e.TimelineLite=Bt,e.TimelineMax=Bt,e.TweenLite=Ht,e.TweenMax=sr,e.default=ar,e.gsap=ar;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


    /*!
 * ScrollTrigger 3.5.1
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

    !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function H(e){return e}function I(){return"undefined"!=typeof window}function J(){return Me||I()&&(Me=window.gsap)&&Me.registerPlugin&&Me}function K(e){return!!~i.indexOf(e)}function L(e,t){return~Fe.indexOf(e)&&Fe[Fe.indexOf(e)+1][t]}function M(t,e){var r=e.s,n=e.sc,o=h.indexOf(t),i=n===rt.sc?1:2;return~o||(o=h.push(t)-1),h[o+i]||(h[o+i]=L(t,r)||(K(t)?n:function(e){return arguments.length?t[r]=e:t[r]}))}function N(e){return L(e,"getBoundingClientRect")||(K(e)?function(){return ut.width=ke.innerWidth,ut.height=ke.innerHeight,ut}:function(){return nt(e)})}function Q(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return(r="scroll"+n)&&(i=L(e,r))?i()-N(e)()[o]:K(e)?Math.max(_e[r],Oe[r])-(ke["inner"+n]||_e["client"+n]||Oe["client"+n]):e[r]-e["offset"+n]}function R(e,t){for(var r=0;r<p.length;r+=3)t&&!~t.indexOf(p[r+1])||e(p[r],p[r+1],p[r+2])}function S(e){return"string"==typeof e}function T(e){return"function"==typeof e}function U(e){return"number"==typeof e}function V(e){return"object"==typeof e}function W(e){return T(e)&&e()}function X(r,n){return function(){var e=W(r),t=W(n);return function(){W(e),W(t)}}}function qa(e){return ke.getComputedStyle(e)}function sa(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function ua(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function wa(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function xa(e,t,r){return e.addEventListener(t,r,{passive:!0})}function ya(e,t,r){return e.removeEventListener(t,r)}function Ca(e,t){if(S(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;n&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in m?m[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function Da(e,t,r,n,o,i,a){var s=o.startColor,l=o.endColor,c=o.fontSize,u=o.indent,f=o.fontWeight,d=Pe.createElement("div"),p=K(r)||"fixed"===L(r,"pinType"),g=-1!==e.indexOf("scroller"),h=p?Oe:r,v=-1!==e.indexOf("start"),b=v?s:l,m="border-color:"+b+";font-size:"+c+";color:"+b+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return m+="position:"+(g&&p?"fixed;":"absolute;"),!g&&p||(m+=(n===rt?x:y)+":"+(i+parseFloat(u))+"px;"),a&&(m+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),d._isStart=v,d.setAttribute("class","gsap-marker-"+e),d.style.cssText=m,d.innerText=t||0===t?e+"-"+t:e,h.insertBefore(d,h.children[0]),d._offset=d["offset"+n.op.d2],w(d,0,n,v),d}function Ha(){return l=l||s(B)}function Ia(){l||(l=s(B),De||_("scrollStart"),De=He())}function Ja(){return!Re&&a.restart(!0)}function Pa(e){var t,r=Me.ticker.frame,n=[],o=0;if(g!==r||Be){for(A();o<P.length;o+=4)(t=ke.matchMedia(P[o]).matches)!==P[o+3]&&((P[o+3]=t)?n.push(o):A(1,P[o])||T(P[o+2])&&P[o+2]());for(E(),o=0;o<n.length;o++)t=n[o],We=P[t],P[t+2]=P[t+1](e);z(We=0,1),g=r,_("matchMedia")}}function Qa(){return ya(Z,"scrollEnd",Qa)||z(!0)}function ab(e,t,r,n){if(e.parentNode!==t){for(var o,i=F.length,a=t.style,s=e.style;i--;)a[o=F[i]]=r[o];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[y]=s[x]="auto",a.overflow="visible",a.boxSizing="border-box",a[Ke]=ua(e,tt)+et,a[je]=ua(e,rt)+et,a[Ze]=s[$e]=s.top=s[b]="0",ct(n),s[Ke]=s.maxWidth=r[Ke],s[je]=s.maxHeight=r[je],s[Ze]=r[Ze],e.parentNode.insertBefore(t,e),t.appendChild(e)}}function db(e){for(var t=D.length,r=e.style,n=[],o=0;o<t;o++)n.push(D[o],r[D[o]]);return n.t=e,n}function gb(e,t,r,n,o,i,a,s,l,c,u,f){if(T(e)&&(e=e(s)),S(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?Ca("0"+e.substr(3),r):0)),U(e))a&&w(a,r,n,!0);else{T(t)&&(t=t(s));var d,p,g,h=Ee(t)[0]||Oe,v=nt(h)||{},b=e.split(" ");v&&(v.left||v.top)||"none"!==qa(h).display||(g=h.style.display,h.style.display="block",v=nt(h),g?h.style.display=g:h.style.removeProperty("display")),d=Ca(b[0],v[n.d]),p=Ca(b[1]||"0",r),e=v[n.p]-l[n.p]-c+d+o-p,a&&w(a,p,n,r-p<20||a._isStart&&20<p),r-=r-p}if(i){var m=e+r,x=i._isStart;f="scroll"+n.d2,w(i,m,n,x&&20<m||!x&&(u?Math.max(Oe[f],_e[f]):i.parentNode[f])<=m+1),u&&(l=nt(a),u&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+et))}return Math.round(e)}function ib(e,t,r,n){if(e.parentNode!==t){var o,i,a=e.style;if(t===Oe){for(o in e._stOrig=a.cssText,i=qa(e))+o||Y.test(o)||!i[o]||"string"!=typeof a[o]||"0"===o||(a[o]=i[o]);a.top=r,a.left=n}else a.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}}function jb(l,e){var c,u,f=M(l,e),d="_scroll"+e.p2;return l[d]=f,function getTween(e,t,r,n,o){var i=getTween.tween,a=t.onComplete,s={};return i&&i.kill(),c=Math.round(r),t[d]=e,(t.modifiers=s)[d]=function(e){return(e=Math.round(f()))!==c&&e!==u?(i.kill(),getTween.tween=0):e=r+n*i.ratio+o*i.ratio*i.ratio,u=c,c=Math.round(e)},t.onComplete=function(){getTween.tween=0,a&&a.call(i)},i=getTween.tween=Me.to(l,t)}}var Me,o,ke,Pe,_e,Oe,i,a,s,l,Ee,Le,Ie,c,Re,Ae,u,ze,f,d,p,Ne,qe,We,g,Be=1,Fe=[],h=[],He=Date.now,v=He(),De=0,Je=1,Qe=Math.abs,t="scrollLeft",r="scrollTop",b="left",x="right",y="bottom",Ke="width",je="height",Ve="Right",Xe="Left",Ue="Top",Ye="Bottom",Ze="padding",$e="margin",Ge="Width",n="Height",et="px",tt={s:t,p:b,p2:Xe,os:x,os2:Ve,d:Ke,d2:Ge,a:"x",sc:function sc(e){return arguments.length?ke.scrollTo(e,rt.sc()):ke.pageXOffset||Pe[t]||_e[t]||Oe[t]||0}},rt={s:r,p:"top",p2:Ue,os:y,os2:Ye,d:je,d2:n,a:"y",op:tt,sc:function sc(e){return arguments.length?ke.scrollTo(tt.sc(),e):ke.pageYOffset||Pe[r]||_e[r]||Oe[r]||0}},nt=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==qa(e)[u]&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},ot={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},it={toggleActions:"play",anticipatePin:0},m={top:0,left:0,center:.5,bottom:1,right:1},w=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?1:0,o["border"+i+Ge]=1,o["border"+a+Ge]=0,o[r.p]=t,Me.set(e,o)},at=[],st={},C={},k=[],P=[],_=function _dispatch(e){return C[e]&&C[e].map(function(e){return e()})||k},O=[],E=function _revertRecorded(e){for(var t=0;t<O.length;t+=4)e&&O[t+3]!==e||(O[t].style.cssText=O[t+1],O[t+2].uncache=1)},A=function _revertAll(e,t){var r;for(ze=0;ze<at.length;ze++)r=at[ze],t&&r.media!==t||(e?r.kill(1):(r.scroll.rec||(r.scroll.rec=r.scroll()),r.revert()));E(t),t||_("revert")},z=function _refreshAll(e,t){if(!De||e){var r=_("refreshInit");for(Ne&&Z.sort(),t||A(),ze=0;ze<at.length;ze++)at[ze].refresh();for(r.forEach(function(e){return e&&e.render&&e.render(-1)}),ze=at.length;ze--;)at[ze].scroll.rec=0;a.pause(),_("refresh")}else xa(Z,"scrollEnd",Qa)},q=0,lt=1,B=function _updateAll(){var e=at.length,t=He(),r=50<=t-v,n=e&&at[0].scroll();if(lt=n<q?-1:1,q=n,r&&(De&&!Ae&&200<t-De&&(De=0,_("scrollEnd")),Ie=v,v=t),lt<0){for(ze=e;ze--;)at[ze]&&at[ze].update(0,r);lt=1}else for(ze=0;ze<e;ze++)at[ze]&&at[ze].update(0,r);l=0},F=[b,"top",y,x,$e+Ye,$e+Ve,$e+Ue,$e+Xe,"display","flexShrink","float"],D=F.concat([Ke,je,"boxSizing","max"+Ge,"max"+n,"position",$e,Ze,Ze+Ue,Ze+Ve,Ze+Ye,Ze+Xe]),j=/([A-Z])/g,ct=function _setState(e){if(e)for(var t,r,n=e.t.style,o=e.length,i=0;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(j,"-$1").toLowerCase())},ut={left:0,top:0},Y=/(?:webkit|moz|length|cssText)/i;tt.op=rt;var Z=(ScrollTrigger.prototype.init=function init(x,y){if(this.progress=0,this.vars&&this.kill(1),Je){var p,n,l,w,C,k,P,_,O,E,I,R,e,A,z,q,W,B,t,F,g,D,J,h,j,v,b,r,m,X,Y,o,c,Z,$,G,ee,te=(x=sa(S(x)||U(x)||x.nodeType?{trigger:x}:x,it)).horizontal?tt:rt,re=x.onUpdate,ne=x.toggleClass,i=x.id,oe=x.onToggle,ie=x.onRefresh,a=x.scrub,ae=x.trigger,se=x.pin,le=x.pinSpacing,ce=x.invalidateOnRefresh,ue=x.anticipatePin,s=x.onScrubComplete,u=x.onSnapComplete,fe=x.once,de=x.snap,pe=x.pinReparent,ge=!a&&0!==a,he=Ee(x.scroller||ke)[0],f=Me.core.getCache(he),ve=K(he),be="pinType"in x?"fixed"===x.pinType:ve||"fixed"===L(he,"pinType"),me=[x.onEnter,x.onLeave,x.onEnterBack,x.onLeaveBack],xe=ge&&x.toggleActions.split(" "),d="markers"in x?x.markers:it.markers,ye=ve?0:parseFloat(qa(he)["border"+te.p2+Ge])||0,Te=this,we=x.onRefreshInit&&function(){return x.onRefreshInit(Te)},Se=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=L(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?ke["inner"+o]:e["client"+o])||0}}(he,ve,te),Ce=function _getOffsetsFunc(e,t){return!t||~Fe.indexOf(e)?N(e):function(){return ut}}(he,ve);Te.media=We,ue*=45,at.push(Te),Te.scroller=he,Te.scroll=M(he,te),C=Te.scroll(),Te.vars=x,y=y||x.animation,"refreshPriority"in x&&(Ne=1),f.tweenScroll=f.tweenScroll||{top:jb(he,rt),left:jb(he,tt)},Te.tweenTo=p=f.tweenScroll[te.p],y&&(y.vars.lazy=!1,y._initted||!1!==y.vars.immediateRender&&!1!==x.immediateRender&&y.render(0,!0,!0),Te.animation=y.pause(),y.scrollTrigger=Te,(o=U(a)&&a)&&(Y=Me.to(y,{ease:"power3",duration:o,onComplete:function onComplete(){return s&&s(Te)}})),m=0,i=i||y.vars.id),de&&(V(de)||(de={snapTo:de}),Me.set(ve?[Oe,_e]:he,{scrollBehavior:"auto"}),l=T(de.snapTo)?de.snapTo:"labels"===de.snapTo?function _getLabels(i){return function(e){var t,r=[],n=i.labels,o=i.duration();for(t in n)r.push(n[t]/o);return Me.utils.snap(r,e)}}(y):Me.utils.snap(de.snapTo),c=de.duration||{min:.1,max:2},c=V(c)?Le(c.min,c.max):Le(c,c),Z=Me.delayedCall(de.delay||o/2||.1,function(){if(Math.abs(Te.getVelocity())<10&&!Ae){var e=y&&!ge?y.totalProgress():Te.progress,t=(e-X)/(He()-Ie)*1e3||0,r=Qe(t/2)*t/.185,n=e+r,o=Le(0,1,l(n,Te)),i=Te.scroll(),a=Math.round(P+o*A),s=p.tween;if(i<=_&&P<=i&&a!==i){if(s&&!s._initted&&s.data<=Math.abs(a-i))return;p(a,{duration:c(Qe(.185*Math.max(Qe(n-e),Qe(o-e))/t/.05||0)),ease:de.ease||"power3",data:Math.abs(a-i),onComplete:function onComplete(){m=X=y&&!ge?y.totalProgress():Te.progress,u&&u(Te)}},i,r*A,a-i-r*A)}}else Te.isActive&&Z.restart(!0)}).pause()),i&&(st[i]=Te),ae=Te.trigger=Ee(ae||se)[0],se=!0===se?ae:Ee(se)[0],S(ne)&&(ne={targets:ae,className:ne}),se&&(!1===le||le===$e||(le=!(!le&&"flex"===qa(se.parentNode).display)&&Ze),Te.pin=se,!1!==x.force3D&&Me.set(se,{force3D:!0}),(n=Me.core.getCache(se)).spacer?z=n.pinState:(n.spacer=B=Pe.createElement("div"),B.setAttribute("class","pin-spacer"+(i?" pin-spacer-"+i:"")),n.pinState=z=db(se)),Te.spacer=B=n.spacer,r=qa(se),h=r[le+te.os2],F=Me.getProperty(se),g=Me.quickSetter(se,te.a,et),ab(se,B,r),W=db(se)),d&&(e=V(d)?sa(d,ot):ot,I=Da("scroller-start",i,he,te,e,0),R=Da("scroller-end",i,he,te,e,0,I),t=I["offset"+te.op.d2],O=Da("start",i,he,te,e,t),E=Da("end",i,he,te,e,t),be||(function _makePositionable(e){e.style.position="absolute"===qa(e).position?"absolute":"relative"}(he),Me.set([I,R],{force3D:!0}),v=Me.quickSetter(I,te.a,et),b=Me.quickSetter(R,te.a,et))),Te.revert=function(e){var t=!1!==e||!Te.enabled,r=Re;t!==w&&(t&&(G=Math.max(Te.scroll(),Te.scroll.rec||0),$=Te.progress,ee=y&&y.progress()),O&&[O,E,I,R].forEach(function(e){return e.style.display=t?"none":"block"}),t&&(Re=1),Te.update(t),Re=r,se&&(t?function _swapPinOut(e,t,r){if(ct(r),e.parentNode===t){var n=t.parentNode;n&&(n.insertBefore(e,t),n.removeChild(t))}}(se,B,z):pe&&Te.isActive||ab(se,B,qa(se),j)),w=t)},Te.refresh=function(e){if(!Re&&Te.enabled)if(se&&e&&De)xa(ScrollTrigger,"scrollEnd",Qa);else{Re=1,Y&&Y.kill(),ce&&y&&y.progress(0).invalidate(),w||Te.revert();for(var t,r,n,o,i,a,s,l,c=Se(),u=Ce(),f=Q(he,te),d=0,p=0,g=x.end,h=x.endTrigger||ae,v=x.start||(0===x.start?0:se||!ae?"0 0":"0 100%"),b=ae&&Math.max(0,at.indexOf(Te))||0,m=b;m--;)!(s=at[m].pin)||s!==ae&&s!==se||at[m].revert();for(P=gb(v,ae,c,te,Te.scroll(),O,I,Te,u,ye,be,f)||(se?-.001:0),T(g)&&(g=g(Te)),S(g)&&!g.indexOf("+=")&&(~g.indexOf(" ")?g=(S(v)?v.split(" ")[0]:"")+g:(d=Ca(g.substr(2),c),g=S(v)?v:P+d,h=ae)),_=Math.max(P,gb(g||(h?"100% 0":f),h,c,te,Te.scroll()+d,E,R,Te,u,ye,be,f))||-.001,A=_-P||(P-=.01)&&.001,d=0,m=b;m--;)(s=(a=at[m]).pin)&&a.start-a._pinPush<P&&(t=a.end-a.start,s===ae&&(d+=t),s===se&&(p+=t));if(P+=d,_+=d,Te._pinPush=p,O&&d&&((t={})[te.a]="+="+d,Me.set([O,E],t)),se)t=qa(se),o=te===rt,n=Te.scroll(),D=parseFloat(F(te.a))+p,!f&&1<_&&((ve?Oe:he).style["overflow-"+te.a]="scroll"),ab(se,B,t),W=db(se),r=nt(se,!0),l=be&&M(he,o?tt:rt)(),le&&((j=[le+te.os2,A+p+et]).t=B,(m=le===Ze?ua(se,te)+A+p:0)&&j.push(te.d,m+et),ct(j),be&&Te.scroll(G)),be&&((i={top:r.top+(o?n-P:l)+et,left:r.left+(o?l:n-P)+et,boxSizing:"border-box",position:"fixed"})[Ke]=i.maxWidth=Math.ceil(r.width)+et,i[je]=i.maxHeight=Math.ceil(r.height)+et,i[$e]=i[$e+Ue]=i[$e+Ve]=i[$e+Ye]=i[$e+Xe]="0",i[Ze]=t[Ze],i[Ze+Ue]=t[Ze+Ue],i[Ze+Ve]=t[Ze+Ve],i[Ze+Ye]=t[Ze+Ye],i[Ze+Xe]=t[Ze+Xe],q=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(z,i,pe)),y?(y.progress(1,!0),J=F(te.a)-D+A+p,A!==J&&q.splice(q.length-2,2),y.progress(0,!0)):J=A;else if(ae&&Te.scroll())for(r=ae.parentNode;r&&r!==Oe;)r._pinOffset&&(P-=r._pinOffset,_-=r._pinOffset),r=r.parentNode;for(m=0;m<b;m++)!(a=at[m].pin)||a!==ae&&a!==se||at[m].revert(!1);Te.start=P,Te.end=_,(C=k=Te.scroll())<G&&Te.scroll(G),Te.revert(!1),Re=0,ee&&ge&&y.progress(ee,!0),$!==Te.progress&&(Y&&y.totalProgress($,!0),Te.progress=$,Te.update()),se&&le&&(B._pinOffset=Math.round(Te.progress*J)),ie&&ie(Te)}},Te.getVelocity=function(){return(Te.scroll()-k)/(He()-Ie)*1e3||0},Te.update=function(e,t){var r,n,o,i,a,s=Te.scroll(),l=e?0:(s-P)/A,c=l<0?0:1<l?1:l||0,u=Te.progress;if(t&&(k=C,C=s,de&&(X=m,m=y&&!ge?y.totalProgress():c)),ue&&!c&&se&&!Re&&!Be&&De&&P<s+(s-k)/(He()-Ie)*ue&&(c=1e-4),c!==u&&Te.enabled){if(i=(a=(r=Te.isActive=!!c&&c<1)!=(!!u&&u<1))||!!c!=!!u,Te.direction=u<c?1:-1,Te.progress=c,ge||(!Y||Re||Be?y&&y.totalProgress(c,!!Re):(Y.vars.totalProgress=c,Y.invalidate().restart())),se)if(e&&le&&(B.style[le+te.os2]=h),be){if(i){if(o=!e&&u<c&&s<_+1&&s+1>=Q(he,te),pe)if(e||!r&&!o)ib(se,B);else{var f=nt(se,!0),d=s-P;ib(se,Oe,f.top+(te===rt?d:0)+et,f.left+(te===rt?0:d)+et)}ct(r||o?q:W),J!==A&&c<1&&r||g(D+(1!==c||o?0:J))}}else g(D+J*c);!de||p.tween||Re||Be||Z.restart(!0),ne&&(a||fe&&c&&(c<1||!qe))&&Ee(ne.targets).forEach(function(e){return e.classList[r||fe?"add":"remove"](ne.className)}),!re||ge||e||re(Te),i&&!Re?(n=c&&!u?0:1===c?1:1===u?2:3,ge&&(o=!a&&"none"!==xe[n+1]&&xe[n+1]||xe[n],y&&("complete"===o||"reset"===o||o in y)&&("complete"===o?y.pause().totalProgress(1):"reset"===o?y.restart(!0).pause():y[o]()),re&&re(Te)),!a&&qe||(oe&&a&&oe(Te),me[n]&&me[n](Te),fe&&(1===c?Te.kill(!1,1):me[n]=0),a||me[n=1===c?1:3]&&me[n](Te))):ge&&re&&!Re&&re(Te)}b&&(v(s+(I._isFlipped?1:0)),b(s))},Te.enable=function(){Te.enabled||(Te.enabled=!0,xa(he,"resize",Ja),xa(he,"scroll",Ia),we&&xa(ScrollTrigger,"refreshInit",we),y&&y.add?Me.delayedCall(.01,function(){return P||_||Te.refresh()})&&(A=.01)&&(P=_=0):Te.refresh())},Te.disable=function(e,t){if(Te.enabled&&(!1!==e&&Te.revert(),Te.enabled=Te.isActive=!1,t||Y&&Y.pause(),G=0,n&&(n.uncache=1),we&&ya(ScrollTrigger,"refreshInit",we),Z&&(Z.pause(),p.tween&&p.tween.kill()&&(p.tween=0)),!ve)){for(var r=at.length;r--;)if(at[r].scroller===he&&at[r]!==Te)return;ya(he,"resize",Ja),ya(he,"scroll",Ia)}},Te.kill=function(e,t){Te.disable(e,t),i&&delete st[i];var r=at.indexOf(Te);at.splice(r,1),r===ze&&0<lt&&ze--,y&&(y.scrollTrigger=null,e&&y.render(-1),t||y.kill()),O&&[O,E,I,R].forEach(function(e){return e.parentNode.removeChild(e)}),n&&(n.uncache=1)},Te.enable()}else this.update=this.refresh=this.kill=H},ScrollTrigger.register=function register(e){if(!o&&(Me=e||J(),I()&&window.document&&(ke=window,Pe=document,_e=Pe.documentElement,Oe=Pe.body),Me&&(Ee=Me.utils.toArray,Le=Me.utils.clamp,Me.core.globals("ScrollTrigger",ScrollTrigger),Oe))){s=ke.requestAnimationFrame||function(e){return setTimeout(e,16)},xa(ke,"mousewheel",Ia),i=[ke,Pe,_e,Oe],xa(Pe,"scroll",Ia);var t,r=Oe.style,n=r.borderTop;r.borderTop="1px solid #000",t=nt(Oe),rt.m=Math.round(t.top+rt.sc())||0,tt.m=Math.round(t.left+tt.sc())||0,n?r.borderTop=n:r.removeProperty("border-top"),c=setInterval(Ha,200),Me.delayedCall(.5,function(){return Be=0}),xa(Pe,"touchcancel",H),xa(Oe,"touchstart",H),wa(xa,Pe,"pointerdown,touchstart,mousedown",function(){return Ae=1}),wa(xa,Pe,"pointerup,touchend,mouseup",function(){return Ae=0}),u=Me.utils.checkPrefix("transform"),D.push(u),o=He(),a=Me.delayedCall(.2,z).pause(),p=[Pe,"visibilitychange",function(){var e=ke.innerWidth,t=ke.innerHeight;Pe.hidden?(f=e,d=t):f===e&&d===t||Ja()},Pe,"DOMContentLoaded",z,ke,"load",function(){return De||z()},ke,"resize",Ja],R(xa)}return o},ScrollTrigger.defaults=function defaults(e){for(var t in e)it[t]=e[t]},ScrollTrigger.kill=function kill(){Je=0,at.slice(0).forEach(function(e){return e.kill(1)})},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(qe=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(c)||(c=t)&&setInterval(Ha,t),"autoRefreshEvents"in e&&(R(ya)||R(xa,e.autoRefreshEvents||"none"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=Ee(e)[0];K(r)?Fe.unshift(ke,t,Oe,t,_e,t):Fe.unshift(r,t)},ScrollTrigger.matchMedia=function matchMedia(e){var t,r,n,o,i;for(r in e)n=P.indexOf(r),o=e[r],"all"===(We=r)?o():(t=ke.matchMedia(r))&&(t.matches&&(i=o()),~n?(P[n+1]=X(P[n+1],o),P[n+2]=X(P[n+2],i)):(n=P.length,P.push(r,o,i),t.addListener?t.addListener(Pa):t.addEventListener("change",Pa)),P[n+3]=t.matches),We=0;return P},ScrollTrigger.clearMatchMedia=function clearMatchMedia(e){e||(P.length=0),0<=(e=P.indexOf(e))&&P.splice(e,4)},ScrollTrigger);function ScrollTrigger(e,t){o||ScrollTrigger.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,t)}Z.version="3.5.1",Z.saveStyles=function(e){return e?Ee(e).forEach(function(e){var t=O.indexOf(e);0<=t&&O.splice(t,4),O.push(e,e.style.cssText,Me.core.getCache(e),We)}):O},Z.revert=function(e,t){return A(!e,t)},Z.create=function(e,t){return new Z(e,t)},Z.refresh=function(e){return e?Ja():z(!0)},Z.update=B,Z.maxScroll=function(e,t){return Q(e,t?tt:rt)},Z.getScrollFunc=function(e,t){return M(Ee(e)[0],t?tt:rt)},Z.getById=function(e){return st[e]},Z.getAll=function(){return at.slice(0)},Z.isScrolling=function(){return!!De},Z.addEventListener=function(e,t){var r=C[e]||(C[e]=[]);~r.indexOf(t)||r.push(t)},Z.removeEventListener=function(e,t){var r=C[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},Z.batch=function(e,t){function bi(e,t){var r=[],n=[],o=Me.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&T(t[r])&&"onRefreshInit"!==r?bi(0,t[r]):t[r];return T(a)&&(a=a(),xa(Z,"refresh",function(){return a=t.batchMax()})),Ee(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push(Z.create(t))}),n},Z.sort=function(e){return at.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},J()&&Me.registerPlugin(Z),e.ScrollTrigger=Z,e.default=Z;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


    const ScrollLottie = (obj) => {

        let anim = lottie.loadAnimation({
            container: document.querySelector(obj.target),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: obj.path
        });

        let timeObj = {currentFrame: 0}
        let endString = (obj.speed === "slow") ? "+=2000" : (obj.speed === "medium") ? "+=1000" : (obj.speed === undefined) ? "+=1250" : "+=500";
        ScrollTrigger.create({
            trigger: obj.target,
            scrub: true,
            pin: true,
            start: "top top",
            end: endString,
            onUpdate: self => {
                if(obj.duration) {
                    gsap.to(timeObj, {
                        duration: obj.duration,
                        currentFrame:(Math.floor(self.progress *  (anim.totalFrames - 1))),
                        onUpdate: () => {
                            anim.goToAndStop(timeObj.currentFrame, true)
                        },
                        ease: 'expo'
                    })
                } else {
                    anim.goToAndStop(self.progress *  (anim.totalFrames - 1), true)
                }
            }
        });

    }

    
    ScrollLottie({
        target: '.hero-section',
        path: randomAnimation,
        duration: .1,
        speed: 'medium'
    });

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 1)

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 10)

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 50)

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 100)
    
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 200)

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 500)

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 700)

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 1000)

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 1500)

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 2000)

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 2500)

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 3000)
    
    
const animations = $(".lottie-animation")
animations.map((index, item) => {
lottie.loadAnimation({
container: item,
renderer: 'svg',
loop: true,
autoplay: true,
path: $(item).attr('animation')
});
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Sidebar links hover
$(document).on('mouseenter', '.sidebar .sidebar-project-link', function() {
    $('.sidebar .sidebar-project-link p').css('opacity', 0.5);
    $(this).children('p').css('opacity', 1);
})

$(document).on('mouseleave', '.sidebar .sidebar-project-link', function() {
    $('.sidebar .sidebar-project-link p').css('opacity', 1);;
})