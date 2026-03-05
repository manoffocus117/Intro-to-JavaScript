const submit_age = () => {
      const age_field = document.getElementById("age");
      const age_value = age_field.value;
      const error_field = document.getElementById("error");

      try {
            const age = parseInt(age_value);
            if (isNaN(age)) {
                  throw "please enter a number";
            } else if (age < 18) {
                  throw "baccha kaccha are not allowed";
            } else if (age > 35) {
                  throw "murubbi, apni nake shorishar tel diye ghuman";
            } else {
                  error_field.innerText = "";
            }
      } catch (err) {
            // console.log(err);
            error_field.innerText = `error happened: ${err}`;
      } finally {
            console.log("everything is okay");
            age_field.value = "";
      }
      console.log(1111111111);
};
