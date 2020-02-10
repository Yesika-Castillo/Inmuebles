import React, { Component } from 'react'
import data from './data'
import './App.css'
import Card from './components/card/card'
import { Button, Input } from 'antd'
import 'antd/dist/antd.css'

class App extends Component {
  state = {
    title: '',
    description: '',
    URL: '',
    finalData: data
  }

  agregar = () => {
    console.log(this.state)
    const { title, description, URL, finalData } = this.state // destructuring
    const payload = { title, description, url: URL }
    const finalArray = [...finalData, payload]
    this.setState({ finalData: finalArray })
  }
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Arquitectura Moderna y Venta de Casas</h1>
        </div>
        <div className="container-formulario">
          <Input
            placeholder="Titulo"
            onChange={evento => this.setState({ title: evento.target.value })}
            value={this.state.title}
          />
          <Input
            placeholder="Descripción"
            onChange={evento =>
              this.setState({ description: evento.target.value })
            }
            value={this.state.description}
          />
          <Input
            placeholder="URL"
            onChange={evento => this.setState({ URL: evento.target.value })}
            value={this.state.URL}
          />
          <Button type="primary " onClick={this.agregar} className="button">
            Agregar
          </Button>
        </div>
        <div className="container-cards">
          {this.state.finalData.map((item, index) => {
            return <Card item={item} />
          })}
        </div>
      </div>
    )
  }
}

export default App
