$((function() {
    $(".header .nav").slicknav({
        label: "",
        appendTo: ".header",
        allowParentLinks: !1
    }), $(".home-slider__slider").bxSlider({
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        responsive: !0,
        touchEnabled: !1,
        pager: !1
    }), $(".popular-products__slider").bxSlider({
        minSlides: 1,
        maxSlides: 5,
        moveSlides: 1,
        responsive: !0,
        touchEnabled: !1,
        pager: !1
    }), $(".brands__slider").bxSlider({
        minSlides: 1,
        maxSlides: 7,
        moveSlides: 1,
        responsive: !0,
        touchEnabled: !1,
        pager: !1
    }), $(".filter__bar").slider({
        range: !0,
        min: 0,
        max: 1e5,
        values: [0, 1e5],
        slide: function(e, i) {
            $("#price-from").attr("value", i.values[0]), $("#price-to").attr("value", i.values[1])
        }
    }), $(".filter__name").on("click", (function() {
        $(this).toggleClass("open")
    })), $(".sort__item").on("click", (function() {
        let e = $(this).text();
        $(this).parents(".sort").find(".sort__input").attr("value", e)
    })), $(".view__link--view1").on("click", (function(e) {
        e.preventDefault(), $(".view__link").removeClass("active"), $(this).addClass("active"), $(".product-list").hide(), $(".product-list-row").show()
    })), $(".view__link--view2").on("click", (function(e) {
        e.preventDefault(), $(".view__link").removeClass("active"), $(this).addClass("active"), $(".product-list-row").hide(), $(".product-list").show()
    })), $(".product-detail__slider").bxSlider({
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        pagerCustom: ".product-detail__preview",
        responsive: !0,
        touchEnabled: !1
    }), $(".radio-input__input-text").on("focus", (function() {
        $(this).parents(".radio-input").find(".radio-input__input").prop("checked", !0)
    })), $("ul.auth-tabs__caption").each((function(e) {
        var i = localStorage.getItem("tab" + e);
        i && $(this).find("li").removeClass("active").eq(i).addClass("active").closest("div.auth-tabs").find("div.auth-tabs__content").removeClass("active").eq(i).addClass("active")
    })), $("ul.auth-tabs__caption").on("click", "li:not(.active)", (function() {
        $(this).addClass("active").siblings().removeClass("active").closest("div.auth-tabs").find("div.auth-tabs__content").removeClass("active").eq($(this).index()).addClass("active");
        var e = $("ul.auth-tabs__caption").index($(this).parents("ul.auth-tabs__caption"));
        localStorage.removeItem("tab" + e), localStorage.setItem("tab" + e, $(this).index())
    })), $(".reg__select").on("change", (function() {
        "Организация" == $(this).val() ? $(this).parents(".reg").find(".reg__company").css("display", "flex") : $(this).parents(".reg").find(".reg__company").hide()
    }))
}));