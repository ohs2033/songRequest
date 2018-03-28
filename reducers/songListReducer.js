

const defaultState = {
    songList:  [
        { title: '거짓말'},
        { title: '거짓말1'},
        { title: '거짓말2'},
        { title: '노래', singer: '가수'},
        { title: '오르막길', singer: '윤종신'},
        { title: '쉬즈곤', singer: 'steelheart'},
        { title: 'and i love you', singer: 'loveman'},
        { title: 'this is rap', singer: '50cents'}
     ]
};

const songReducers = (state=defaultState, action) => {
    return state;
};

export default songReducers;