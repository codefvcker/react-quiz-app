class QuizDataService {
  constructor() {
    if (typeof QuizDataService.instance === "object") {
      return QuizDataService.instance;
    }
    this._apiBase = "";
    QuizDataService.instance = this;
    return this;
  }

  getResource = async url => {
    const response = await fetch(
      `https://react-todo-hooks-fcdd5.firebaseio.com${url}`
    );
    return response.json();
  };

  getCourse = async id => {
    const response = await this.getResource(`/${id}`);
    return response;
  };
}

export const QuizService = new QuizDataService();
