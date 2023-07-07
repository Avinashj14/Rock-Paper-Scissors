userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");



optionImages.forEach((image, index) => {
image.addEventListener("click", (e) => {
    let imageSrc = e.target.querySelector("img").src;


    userResult.src = imageSrc;

  
    let randomNumber = Math.floor(Math.random() * 3);
      let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
          cpuResult.src = cpuImages[randomNumber];
    
    
          let cpuValue = ["R", "P", "S"][randomNumber];
          let userValue = ["R", "P", "S"][index];

    let outcomes = {
      RR: "Draw",
      RP: "Cpu",
      RS: "User",
      PP: "Draw",
      PR: "User",
      PS: "Cpu",
      SS: "Draw",
      SR: "Cpu",
      SP: "User",
    };

  
    let outComeValue = outcomes[userValue + cpuValue];


    result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;

});
});
