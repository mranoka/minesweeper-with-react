import React from 'react';
import './Styles.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import TurnsCounter from './TurnsCounter.js';
import MineCounter from './MIneCounter'

// React-bootstrap CSS 
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loseGrid: [],
            stateGrid: [],
            count: [],
            mine: '',
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleMine = this.handleMine.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    // resets the game when the try again button is clicked
    handleReset() {
        window.location.reload();
    }

    // handles creation of game grid
    handleMine() {
        // create a list of 48 buttons assigned with either 1 or 2
        // 1 is neutral and 2 is a mine
        // there is a 1 in 4 chance that each item in the grid will be a mine
        const arrCount = Array(48).fill(3); // create array of 48 items all 4
        // grid is the blueprint for the minesweeper grid
        const grid = arrCount.map((item) => {
            // generate random number to determine whether or not button will be mine
            let dangerItem = Math.floor(Math.random() * item + 1);
            return dangerItem;
        })
        // counts how many mines there are in grid
        let mineCount = []
        grid.map(item => {
            if (item === 2) {
                mineCount.push(item)
            }
            return item;
        })
        //reveals all the mines on the grid
        const loseArr = grid.map((item, index) => {
            let keySet = Math.random() * 100 + index;
            if (item === 2) {
                item =
                    <>
                        <button className='lose-class' key={keySet} value={item} onClick={this.handleClick}></button>
                    </>
            } else {
                item =
                    <>
                        <button className='grid-button' key={keySet} value={item} onClick={this.handleClick}></button>
                    </>
            }
            return item;
        })
        // will be displayed without mines
        const playArr = grid.map((item, index) => {
            let keySet = Math.random() * 100 + index;
            if (item === 2) {
                item =
                    <>
                        <button className='grid-button' key={keySet} value={item} onClick={this.handleClick}></button>
                    </>
            } else {
                item =
                    <>
                        <button className='grid-button' key={keySet} value={item} onClick={this.handleClick}></button>
                    </>
            }
            return item;
        })
        // set assign grids above to state properties
        this.setState({
            loseGrid: loseArr,
            stateGrid: playArr,
            count: mineCount
        })
    }

    // handles each click event on grid
    handleClick(e) {
        e.preventDefault();
        // populate counter state as long as user has not lost
        if (e.target.value !== '2' && this.state.stateGrid.length === 48) { // if user clicks on neutral grid item
            e.target.className = 'win-class';
            e.target.disabled = true; // button can only be clicked once
            this.setState(state => ({
                counter: state.counter + 1
            }))
            //user can only click mine if they have not won or clicked any mines yet   
        } else if (e.target.value === '2' && this.state.counter < 48 - this.state.count.length) { // if user clicks mine
            e.target.className = 'lose-class';
            this.setState({
                stateGrid: [1]
            })
            // user has lost, they will no longer be able to play until they restart game
            if (e.target.value !== '2') {
                return;
            }
            return;
        }

    }

    // load grid as soon as page loads
    componentDidMount() {
        this.handleMine()
    }

    render() {
        let tryButton = <Button variant='primary' onClick={this.handleReset}>Try again</Button>;
        return (
            <>
                <Container>
                    <div id='mine-grid'>
                        <div id='button-div'>
                            {/* Only rendered when player loses or wins*/}
                            {this.state.stateGrid.length !== 48 ? tryButton : this.state.counter === 48 - this.state.count.length ? tryButton : ''}
                        </div>
                        {/* Only rendered when player loses or wins*/}
                        <div className='win-lose-class' id={this.state.stateGrid.length !== 48 ? 'win-lose-div' : this.state.counter === 48 - this.state.count.length ? 'win-lose-div' : ''}>
                            <div className='win-item'>
                                {this.state.stateGrid.length !== 48 && <h1>YOU LOSE!</h1>}
                            </div>
                            <div className='win-item'>
                                {this.state.counter === 48 - this.state.count.length && <h1>YOU WIN!!!</h1>}
                            </div>
                        </div>
                        <div id='display'>
                            <div className='display-item1'>
                                <TurnsCounter turnsLeft={(48 - this.state.count.length) - this.state.counter} />
                            </div>
                            <div id='display-item2' className='display-item'>
                                <TurnsCounter turns={this.state.counter} />
                            </div>
                            <div id='display-item3' className='display-item'>
                                <MineCounter mines={this.state.count.length} />
                            </div>
                        </div>
                        {this.state.stateGrid.length === 48 ? this.state.stateGrid : this.state.loseGrid}
                    </div>
                </Container>
            </>
        );
    }
}