class CardList {
    constructor(container, api, func) {
      this.container = container;
      this.api = api;
      this.func = func;
    }
    addCard(title, image) {
      this.container.appendChild(this.func().create(title, image));
    }
    render() {
      this.api.getInitialCards()
      .then(cards => {
        for (const card of cards) {
          this.addCard(card.name, card.link);
        }        
      })
      .catch (err => {
        console.log(err)
      })
    }
  }


