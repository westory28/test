const questions = [
  "사람들은 왜 새로운 규칙을 받아들이기 어려워할까?",
  "좋은 선택은 항상 좋은 결과를 만들까?",
  "내가 오늘 수업에서 꼭 알고 싶은 것은 무엇일까?",
  "같은 사건을 사람마다 다르게 기억하는 이유는 무엇일까?",
  "우리가 당연하다고 생각하는 것은 정말 당연한 것일까?"
];

const moods = [
  "오늘은 조용히 듣기보다 한 번은 말해보는 수업입니다.",
  "오늘은 정답보다 이유를 더 중요하게 보는 수업입니다.",
  "오늘은 빠르게 쓰기보다 천천히 생각하는 수업입니다.",
  "오늘은 친구의 생각을 빌려 내 생각을 넓히는 수업입니다.",
  "오늘은 모르는 것을 부끄러워하지 않는 수업입니다."
];

const missions = [
  "옆 사람에게 내 생각을 10초 안에 설명하기",
  "오늘 수업에서 새로 알게 된 단어 하나 표시하기",
  "친구 의견 중 마음에 드는 표현 하나 적기",
  "내 생각이 바뀐 순간이 있는지 찾아보기",
  "수업 끝나기 전 질문 하나 만들기"
];

function pickRandom(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function startClass() {
  document.getElementById("question").textContent = pickRandom(questions);
  document.getElementById("mood").textContent = pickRandom(moods);
  document.getElementById("mission").textContent = pickRandom(missions);

  document.getElementById("result").classList.remove("hidden");
}
