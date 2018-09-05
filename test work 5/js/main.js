// ***********  rating star **************
var rating = document.querySelector('.rating'),
		ratingItem = document.querySelectorAll('.rating-item');

rating.onclick = function (e) {
	var target = e.target;
	if (target.classList.contains('rating-item')){
		removeClass(ratingItem, 'current-active');
		target.classList.add('active', 'current-active');
	}
}

rating.onmouseover = function (e) {
	var target = e.target;
	if (target.classList.contains('rating-item')){
		removeClass(ratingItem, 'active')
		target.classList.add('active');
		mouseOverActiveClass(ratingItem);
	}
}

rating.onmouseout = function () {
	addClass(ratingItem, 'active');
	mouseOutActiveClass (ratingItem);
}

function removeClass (arr) {
	for (var i = 0, iLen = arr.length; i<iLen; i++) {
		for (var j = 1; j < arguments.length; j++) {
			ratingItem[i].classList.remove(arguments[j]);
		}
	}
}

function addClass (arr) {
	for (var i = 0, iLen = arr.length; i<iLen; i++) {
		for (var j = 1; j < arguments.length; j++) {
			ratingItem[i].classList.add(arguments[j]);
		}
	}
}

function mouseOverActiveClass (arr) {
	for (var i = 0, iLen = arr.length; i < iLen; i++) {
		if (arr[i].classList.contains('active')) {
			break;
		} else {
			arr[i].classList.add('active');
		}
	}
}

function mouseOutActiveClass (arr) {
	for (var i = arr.length-1; i >= 1; i--) {
		if (arr[i].classList.contains('current-active')) {
			break;
		} else {
			arr[i].classList.remove('active');
		}
	}
}

// ***********  end **************

// estimation
function myCircleEstimation(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  function describeArc(x, y, radius, startAngle, endAngle){

      var start = myCircleEstimation(x, y, radius, endAngle);
      var end = myCircleEstimation(x, y, radius, startAngle);

      var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

      var d = [
          "M", start.x, start.y, 
          "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(" ");

      return d;       
  }
  document.getElementById("arc1").setAttribute("d", describeArc(100, 100, 90, 1, 360));
  document.getElementById("arc2").setAttribute("d", describeArc(100, 100, 90, 1, 230));

 // ***********  end **************