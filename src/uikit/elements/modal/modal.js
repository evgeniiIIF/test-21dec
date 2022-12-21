"use strict";
(function () {
  class Modal {
    constructor(opts) {
      const defaultOpts = {
        isOpen: () => {},
      };
      this.opts = Object.assign(defaultOpts, opts);
      this.modal = document.querySelector(".js-modal");
      this.speed = 300;
      this.animation = false;
      this.isOpen = false;
      this.modalItem = false;
      this.prevActiveElement = false;
      this.fixBlocks = document.querySelectorAll(".js-fix-block");
      this.events();
    }

    events() {
      if (this.modal) {
        document.addEventListener(
          "click",
          function (e) {
            const buttonModal = e.target.closest("[data-path]");

            if (buttonModal) {
              const targetModal = buttonModal.dataset.path;
              this.animation = buttonModal.dataset.animation ? buttonModal.dataset.animation : "fade";
              this.speed = buttonModal.dataset.speed ? parseInt(buttonModal.dataset.speed) : 300;
              this.modalItem = document.querySelector(`[data-target='${targetModal}']`);
              this.open();
              return;
            }

            if (e.target.closest(".js-modal__close") || !e.target.closest(".js-modal__item")) {
              this.close();
              return;
            }
          }.bind(this)
        );
      }
    }

    open(selector) {
      this.modal.style.setProperty("$transitionTime", `${this.speed / 1000}s`);
      this.modal.classList.add("js-is-open");
      this.disableScroll();
      this.addScrollWidth();
      this.modalItem.classList.add("js-modal-open");
      this.modalItem.classList.add(this.animation);
      // this.isOpen();
      setTimeout(() => {
        this.modalItem.classList.add("js-animate-open");
      }, this.speed);
    }

    close() {
      this.modal.classList.remove("js-is-open");
      this.enableScroll();
      this.removeScrollWidth();
      this.modalItem.classList.remove("js-modal-open");
    }

    disableScroll() {
      document.documentElement.classList.add("_lock");
    }

    enableScroll() {
      document.documentElement.classList.remove("_lock");
    }

    addScrollWidth() {
      const scrollWidth = this.getScrollWidth();
      document.body.style.paddingRight = scrollWidth;
    }

    removeScrollWidth() {
      document.body.style.paddingRight = "";
    }

    getScrollWidth() {
      let div = document.createElement("div");

      div.style.overflowY = "scroll";
      div.style.width = "50px";
      div.style.height = "50px";

      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();
      return scrollWidth + "px";
    }
  }

  const modal = new Modal({
    isOpen: (modal) => {
      // modal.classList.add("asJJJJJJ");
      console.log(modal);
    },
  });
})();
