const domBuilder = {
    appendInputForm () {
      let inputForm = `<article>
      <fieldset>
      <label for="lego__creator">Creator:</label>
      <input id="lego__creator" name="lego__creator" type="text" autofocus />
      </fieldset>
      <fieldset>
      <label for="lego__name">Name:</label>
      <input id="lego__name" name="lego__name" type="text" autofocus />
      </fieldset>
      <fieldset>
      <label for="lego__shape">Shape:</label>
      <input id="lego__shape" name="lego__shape" type="text" autofocus />
      </fieldset>
      <fieldset>
      <label for="lego__color">Color:</label>
      <select id="lego__color">
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Yellow">Yellow</option>
        <option value="Blue">Blue</option>
        <option value="Orange">Orange</option>
        <option value="Black">Black</option>
        </select>
      </fieldset>
      <button class="btn lego__save">Save Lego Creation</button>
      </article>`
  
      let displayContainer = document.querySelector("#display-container");
      displayContainer.innerHTML = inputForm;
  
      // How to create a button, add a class and attach an event listener using createElement.
      // let newButton = document.createElement("button");
      // newButton.classList.add("aclass");
      // newButton.addEventListener("click", eventListeners.handleFormSubmission);
      // console.log(newButton);
      // displayContainer.appendChild(newButton);
    }
  }
  