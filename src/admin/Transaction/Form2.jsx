import React, { Component } from 'react'
import './Formcss2.css'
import { TezosToolkit } from '@taquito/taquito'
import { TempleWallet } from '@temple-wallet/dapp';
    
class Form2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            bcredit: "",
            bdebit: "",
            credit: "",
            date: "",
            debit: "",
            


        }
        this.handleSubmit=this.handleSubmit.bind(this)
        const Tezos = new TezosToolkit('https://granadanet.smartpy.io')
        TempleWallet.isAvailable()
        .then(() => {
        const mywallet = new TempleWallet('TECHX2');
        mywallet.connect('granadanet').then(() => {
            Tezos.setWalletProvider(mywallet);
            return mywallet.getPKH()}).then((pkh) => {
            console.log(`Your address: ${pkh}`);
        });
        })
        .catch((err) => console.log(err));
    Tezos.contract
        .at('KT1T5yC3M3sfPnaZQboG99VAphyaCPzmEkze')
        .then((contract) => {
            return contract.methods.Add_transaction(3,2,4,5,4,5).send();
        })
        .then((op) => {
            return op.confirmation(1).then(() => op.hash);
        })
        .then((hash) => console.log(`Operation injected: https://granada.tzstats.com/${hash}`))
        .catch((error) => console.log(`Error: ${JSON.stringify(error, null, 2)}`));

        
    }

    
    bcredithandler = (event) => {
        this.setState({
            bcredit: event.target.value
        })
    }
    bdebithandler = (event) => {
        this.setState({
            bdebit: event.target.value
        })
    }
    credithandler = (event) => {
        this.setState({
            credit: event.target.value
        })
    }

    datehandler = (event) => {
        this.setState({
            date: event.target.value
        })
    }

    debithandler = (event) => {
        this.setState({
            debit: event.target.value
        })
    }

    namehandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.bcredit} ${this.state.bdebit}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            name: "",
            bcredit: "",
            bdebit: "",
            credit: "",
            date: "",
            debit: "",
            
        })
     event.preventDefault()
    }




    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Transaction</h1>
                    <label>name :</label> <input type="text" value={this.state.name} onChange={this.namehandler} placeholder="name..." /><br />
                    <label>bcredit :</label> <input type="number" value={this.state.bcredit} onChange={this.bcredithandler} placeholder="bcredit..." /><br />
                    <label>bdebit :</label> <input type="number" value={this.state.bdebit} onChange={this.bdebithandler} placeholder="bdebit..." /><br />
                    <label>credit :</label> <input type="number" value={this.state.credit} onChange={this.credithandler} placeholder="credit..." /><br />
                    <label>date :</label> <input type="date" value={this.state.date} onChange={this.datehandler} placeholder="date..." /><br />
                    <label>debit :</label> <input type="text" value={this.state.debit} onChange={this.debithandler} placeholder="debit..." /><br />
                    
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form2