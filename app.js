function goToStage(stageNum) {
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`stage-${i}`).style.display = i === stageNum ? 'block' : 'none';
  }
}

function resetWorkflow() {
  alert("Request Rejected. Starting over.");
  goToStage(1);
}

function finishWorkflow() {
  const feedback = document.querySelector('#stage-5 textarea').value;
  alert(`Thank you! Feedback received: ${feedback}`);
  goToStage(1); // or show a thank you screen
}
