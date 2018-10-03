// import $ from 'jquery';

class Search {
  // 1. describe and create/initiate our object
  constructor() {
    this.searchOverlay = document.querySelector(".search-overlay");
    this.closeButton = document.querySelector(".search-overlay__close");
    this.openButton = document.querySelector(".js-search-trigger");
    this.body = document.querySelector("body");
    this.searchField = document.querySelector(".search-term");
    this.resultsDiv = document.querySelector(".search-overlay__results");
    this.events();
    this.isOverlayOpen = false;
    this.isSpinnerVisible = false;
    this.previousValue;
    this.typingTimer;
  }

  // 2. events
  events() {
    this.openButton.addEventListener("click", this.openOverlay.bind(this));
    this.closeButton.addEventListener("click", this.closeOverlay.bind(this));
    document.addEventListener("keydown", this.keyPressDispatcher.bind(this));
    this.searchField.addEventListener("keyup", this.typingLogic.bind(this));
  }

  // 3. methods (function, action ...)
  typingLogic() {
      if (this.searchField.value != this.previousValue) {
          clearTimeout(this.typingTimer);

          if(this.searchField.value) {
            if (!this.isSpinnerVisible) {
                this.resultsDiv.innerHTML = '<div class="spinner-loader"></div>';
                this.isSpinnerVisible = true;
              };

              this.typingTimer = setTimeout(this.getResults.bind(this), 750);

          } else {
            this.resultsDiv.innerHTML = '';
            this.isSpinnerVisible = false;
          }

          }
          this.previousValue = this.searchField.value;
    }

    getResults() {

        fetch(universityData.root_url + '/wp-json/university/v1/search?term=' + this.searchField.value)
        .then(data => data.json())
        .then(results => {
          console.log(results);
          this.resultsDiv.innerHTML= `
         <div class="row">
            <div class="one-third">
              <h2 class="search-overlay__section-title">General Information</h2>
              ${results.generalInfo.length ? '<ul class="link-list min-list">' : '<p>Sorry there is no general infornation related to this search</p>'}
          ${results.generalInfo.map(post => `
            <li><a href="${post.permalink}">${post.title}</a> ${ post.type === 'post' ? ` by ${ post.author }` : ''}</li>`
          ).join('')}
          ${results.generalInfo.length ? '</ul>' : ''}
          </div>
            <div class="one-third">
              <h2 class="search-overlay__section-title">Programs</h2>
              ${results.programs.length ? '<ul class="link-list min-list">' : `<p>Sorry there is no programs related to this search. <a href="${universityData.root_url}/programs">View all programs.</a></p>`}
          ${results.programs.map(post => `
            <li><a href="${post.permalink}">${post.title}</a></li>`
          ).join('')}
          ${results.programs.length ? '</ul>' : ''}

              <h2 class="search-overlay__section-title">Professors</h2>
              ${results.professors.length ? '<ul class="professor-cards">' : `<p>Sorry there is no professors related to this search. </p>`}
          ${results.professors.map(post => `
          <li class="professor-card__list-item">
			<a class="professor-card" href="${post.permalink}">
				<img class="professor-card__image" src="${post.image}" alt="professor image">
				<span class="professor-card__name">${post.title}</span>
			</a>
		</li>
            `
          ).join('')}
          ${results.professors.length ? '</ul>' : ''}

            </div>
            <div class="one-third">
              <h2 class="search-overlay__section-title">Campuses</h2>
              ${results.campuses.length ? '<ul class="link-list min-list">' : `<p>Sorry there is no programs related to this search. <a href="${universityData.root_url}/campuses">View all programs.</a></p>`}
          ${results.campuses.map(post => `
            <li><a href="${post.permalink}">${post.title}</a></li>`
          ).join('')}
          ${results.campuses.length ? '</ul>' : ''}

              <h2 class="search-overlay__section-title">Events</h2>
              ${results.events.length ? '' : `<p>Sorry there is no events related to this search. <a href="${universityData.root_url}/events">View all programs.</a></p>`}
          ${results.events.map(item => `
          <div class="event-summary">
            <a class="event-summary__date t-center" href="${item.permalink}">
            <span class="event-summary__month">${item.month}</span>
            <span class="event-summary__day">${item.day}</span>
           </a>
          <div class="event-summary__content">
            <h5 class="event-summary__title headline headline--tiny"><a href="${item.permalink}">${item.title}</a></h5>
        <p>${item.description}<a href="${item.permalink}" class="nu gray">Learn more</a></p>
           </div>
          </div>
          `
          ).join('')}
          ${results.events.length ? '</ul>' : ''}

            </div>
        </div>
        `
        })
        .catch(() =>
        { this.resultsDiv.innerHTML= `<p>Something went wrong! Please try again!</p>`});
        this.isSpinnerVisible = false;
    }

  keyPressDispatcher(e) {
    if (e.keyCode == 83 && !this.isOverlayOpen) {
      this.openOverlay();
      console.log("Our open method just ran");
    }

    if (e.keyCode == 27 && this.isOverlayOpen) {
      this.closeOverlay();
      console.log("Our close method just ran");
    }
  }
  openOverlay() {
    this.searchOverlay.classList.add("search-overlay--active");
    this.body.classList.add("body-no-scroll");
    this.searchField.value='';
    setTimeout(() => {
      this.searchField.focus();
    }, 301);
    this.isOverlayOpen = true;
  }

  closeOverlay() {
    this.searchOverlay.classList.remove("search-overlay--active");
    this.body.classList.remove("body-no-scroll");
    this.isOverlayOpen = false;
  }


}

export default Search;
