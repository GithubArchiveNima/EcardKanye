import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      from: '',
      to: '',
      body: '',
      kanye: "1"
    }

    this.handleChangeFrom = this.handleChangeFrom.bind(this)
  }

  handleChangeFrom(event) {
    this.setState({
      from: event.target.value
    })
  }

  handleChangeTo = (event) => {
    this.setState({
      to: event.target.value
    })
  }

  handleChangeBody = (event) => {
    this.setState({
      body: event.target.value
    })
  }

  handleChangeKanye = (event) => {
    this.setState({
      kanye: event.target.value
    })
  }


  handleGenerate = () => {
    this.props.generate(this.state)
    // console.log(this.state)
  }

  render() {
    return (
      <div>
        <h1>Create your card!</h1>
        <label>
          From:
          <input value={this.state.from} onChange={this.handleChangeFrom} />
        </label>
        <label>
          To:
          <input value={this.state.to} onChange={this.handleChangeTo} />
        </label>
        <label>
          Body:
          <input value={this.state.body} onChange={this.handleChangeBody} />
        </label>

        <label>
          Kanye:
          <select value={this.state.kanye} onChange={this.handleChangeKanye}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>


        <button onClick={this.handleGenerate}>Generate</button>
      </div>
    )
  }
}


const Card = (props) => {
  return (
    <div className="card">
      <div className="container">
        <h2 className="from">From {props.from}</h2>
        <h2 className="to">To {props.to}</h2>
        <p>{props.body}</p>
        <img src={`build/kanyes/${props.kanye}.png`} />
      </div>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      from: "",
      to: "",
      body: "",
      kanye: "1",

      kanyes: []
    }
  }

  generateCard = (data) => {
    this.setState({ // SET STATE OF APP
      ...data
    })
  }

  render() {

    // const happy = false
    // const sad = false
    return (
      <div>
        <Form generate={this.generateCard}/>
        <Card
          from={this.state.from}
          to={this.state.to}
          body={this.state.body}
          kanye={this.state.kanye}
        />
      </div> 
    );
  }

//   render() {

//     const kanyes = this.state.kanyes

//     return (
//       <div>
//         <button onClick={() => {
//           kanyes.push("")
//           this.setState({
//             kanyes: kanyes
//           })
//         }}>Increase</button>
//         {
//           kanyes.map(k => {
//             return (
//               <img src={`build/kanyes/1.png`} />
//             )
//           })
//         }
//       </div>
//     )
//   }
}
export default App;


/*

Hey! How you been? I liked your most recent album. Huge fan. Please come by sometime. Love you lots, Your best fan, Nima

*/

/* 
        {
          // [1, 2, 3, 4, 5].forEach(e => {
          //   return <p>Hello</p>
          // })

          // for (let i = 0; i < 5; i++) {
          //   return <p>Hello</p>
          // }

          [1, 2, 3, 4, 5].map(i => {
            return <p>This is {i}</p>
          })
        }

        {
          happy ? <p>😁</p> ? ? ? ? ? ? 
          // if (happy) {
          //   return <p>😄</p>
          // } else {
          //   return <p>☹️</p>
          // }
        }
        


*/