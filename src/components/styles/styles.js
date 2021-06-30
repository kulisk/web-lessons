import styled from 'styled-components';

export const CalculatorStyles = styled.div`
  display: grid;
  grid-template-areas:
            "a a a a"
            "b c d e"
            "g h i f"
            "j k l f"
            "m n o f"
            "p q r f";
  grid-gap: 10px;
  margin: 200px auto;
  padding: 15px;
  width: 400px;
  height: 600px;
  background-color: #808080;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 38px;
  color: #fff;
  button {
    padding: 0;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  #output {
    grid-area: a;
    background-color: #4d4d4d;
    line-height: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 7px;
    border: 1px solid black;
    border-radius: 5px;
    overflow: auto;
  }

  #btn-plus {
    grid-area: b;
  }

  #btn-minus {
    grid-area: c;
  }

  #btn-times {
    grid-area: d;
  }

  #btn-divide {
    grid-area: e;
  }

  #btn-equally {
    grid-area: f;
  }

  #btn-7 {
    grid-area: g;
  }

  #btn-8 {
    grid-area: h;
  }

  #btn-9 {
    grid-area: i;
  }

  #btn-4 {
    grid-area: j;
  }

  #btn-5 {
    grid-area: k;
  }

  #btn-6 {
    grid-area: l;
  }

  #btn-1 {
    grid-area: m;
  }

  #btn-2 {
    grid-area: n;
  }

  #btn-3 {
    grid-area: o;
  }

  #btn-0 {
    grid-area: p;
  }

  #btn-dot {
    grid-area: q;
  }

  #btn-c {
    grid-area: r;
  }

  .calculator__btn {
    border: 1px solid black;
    border-radius: 5px;
    background-color: #4d4d4d;
    height: 100%;
  }

  .calculator__btn:hover {
    background-color: #000;
  }
`;