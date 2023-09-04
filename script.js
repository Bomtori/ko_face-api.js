/*
첫번째로 html에서 웹캠의 요소를 가지고 옵니다.
getElementById라는 명령어를 사용하여 html의
<body>
    <video id="video" width="600" height="450" autoplay>
</body>
이 부분을 가지고 옵니다.
*/
const video = document.getElementById("video");

/* 
faceapi model들을 가지고 옵니다.
'/models'는 위치이며, 만약 이 예제에서 추가로 변경하거나
모델을 추가하고싶다면 model을 koush / face-api.js에서 가져와 추가하시면 됩니다.
추가하는 방법은
faceapi.nets.(가지고 오고싶은 모델의 이름).loadFromUri("/models")
형식으로 추가하시면 됩니다.
*/
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("/models"),
]).then(startWebcam);

function startWebcam() {
  //웹캠을 실행하는 코드입니다.
  navigator.mediaDevices
    .getUserMedia({
      video: true, // UserMedia에서 가져올 것을 선택합니다.
      audio: false, // 이번 예제에서는 video만 필요함으로, voice는 false값을 줍니다.
    })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch((error) => {
      console.error(error);
    });
}

video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);

  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    faceapi.draw.drawDetections(canvas, detections);
    faceapi.draw.drawFaceExpressions(canvas, detections);

    console.log(detections);
  }, 100);
});
