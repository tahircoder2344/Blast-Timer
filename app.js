const endDate = "20 December 2023, 4:47 AM";
const inputs = document.querySelectorAll("input");
document.getElementById("end-date").innerText = endDate;

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  console.log(diff);
  //for days
  inputs[0].value = Math.floor(diff / 3600 / 24);
  // for hours
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;

  // conersion into days;
};

clock();



setInterval(
    () => {
        clock();
    }
)
