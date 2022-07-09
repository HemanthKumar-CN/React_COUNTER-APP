import React from "react";
import  {render, cleanup, fireEvent}  from "@testing-library/react";
import  ReactDOM  from "react-dom";
import Button from "./Button";
import renderer from 'react-test-renderer';
// import Button from './Button'


// it('should render without crashing', () => {
//     const div = document.createElement('div')
//     ReactDOM.render(<Button label="button"></Button>,div)
// });

afterEach(cleanup)

it("should render without crashing",()=>{
    const div = document.createElement('div')
    ReactDOM.render( <Button label="button"></Button>,div)
})

it('should render button with lable click me', () => {
    const {getByTestId} = render(<Button label='click me'></Button>)
    expect(getByTestId('button')).toHaveTextContent("click me")
});


it('should render button with lable add', () => {
    const {getByTestId} = render(<Button label='add'></Button>)
    expect(getByTestId('button')).toHaveTextContent("add")
});

it('matches snapshot', () => {
    const tree = renderer.create(<Button label='REMOVE'></Button>).toJSON()
    expect(tree).toMatchSnapshot()
});

// To change the value here it get a failed test case output, put in watch usage list below, press u to update snapshots.


it('invokes function on click', () => {
    // mock func
    const mockFn = jest.fn()
    const {getByTestId} = render(<Button label='CLICK ME' onClick ={mockFn}></Button> )
    
    const button = getByTestId('button')
    
    fireEvent.click( button )
    fireEvent.click( button )

    expect(mockFn).toHaveBeenCalledTimes(2)
});