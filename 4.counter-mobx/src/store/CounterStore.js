import {observable,action, makeObservable} from 'mobx';



class CounterStore{
    
    // observable({
    //     _count=5//count컴포넌트에서 사용할 state, 이 변수는 observable한 데이터가 되어야하기 때문에 observable함수의 파라미터로 
    //     , //쉼표로 붙일수있음
    // }); 

    constructor(){ //mobX6기준 필요
        makeObservable(this);
    }

    @observable //보통 데코레이터 사용. 바벨통해 변경됨 / 추가설정필요: 환경설정 -settings- exper검색 ExperimentalDecorators Enable체크 
    _count =5; 

    get count(){
        return this._count;
    }

    @action
    increment(){
        this._count ++;
        console.log(this._count)
    }
    @action
    decrement(){
        this._count --;
        console.log(this._count)
    }
}


export default new CounterStore(); //new로 생성