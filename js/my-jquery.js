$(document).ready(function () {
  $(".haeder-title").show(700);
  //for header title

  $(".searchGo").click(function () {
    //for search boox open
    $(".search-box").show(500);
  });

  $(".closs-search").click(function () {
    //for search boox clos
    $(".search-box").hide(500);
  });

  function openNav() {
    //for open side nav
    document.getElementById("#mySidenav").style.width = "300px";
  }

  function closeNav() {
    //for clos side nav
    document.getElementById("mySidenav").style.width = "0";
  }

  $(".mapCardCloss").click(function () {
    //for search boox clos
    $(".all-map-text").hide(500);
  });

  $(".truck").click(function () {
    //for chsng image calculat type
    $(".small-image").attr("src", "img/col.jpg");
  });
  $(".air").click(function () {
    //for chsng image calculat type
    $(".small-image").attr("src", "img/air.jpg");
  });
  $(".ocen").click(function () {
    //for chsng image calculat type
    $(".small-image").attr("src", "img/ocen.jpg");
  });
  $(".shuter-stock").click(function () {
    //for chsng image calculat type
    $(".small-image").attr("src", "img/shutterstock.jpg");
  });

  $(document).ready(function () {
    $(".sign-btn").click(function (event) {
      event.preventDefault();
    });
  });

  //for order request
  $(document).ready(function () {
    var navListItems = $("div.setup-panel div a"),
      allWells = $(".setup-content"),
      allNextBtn = $(".nextBtn");
    allWells.hide();
    navListItems.click(function (e) {
      e.preventDefault();
      var $target = $($(this).attr("href")),
        $item = $(this);
      if (!$item.hasClass("disabled")) {
        navListItems.removeClass("btn-success").addClass("btn-default");
        $item.addClass("btn-success");
        allWells.hide();
        $target.show();
        $target.find("input:eq(0)").focus();
      }
    });
    allNextBtn.click(function () {
      var curStep = $(this).closest(".setup-content"),
        curStepBtn = curStep.attr("id"),
        nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]')
          .parent()
          .next()
          .children("a"),
        curInputs = curStep.find("input[type='text'],input[type='url']"),
        isValid = true;
      $(".form-group").removeClass("has-error");
      for (var i = 0; i < curInputs.length; i++) {
        if (!curInputs[i].validity.valid) {
          isValid = false;
          $(curInputs[i]).closest(".form-group").addClass("has-error");
        }
      }
      if (isValid) nextStepWizard.removeAttr("disabled").trigger("click");
    });

    $("div.setup-panel div a.btn-success").trigger("click");
  });

  $("#date").datetimepicker({
    //for date picker calinder
    format: "mm/dd/yyyy",
    startDate: "-3d",
  });
});
