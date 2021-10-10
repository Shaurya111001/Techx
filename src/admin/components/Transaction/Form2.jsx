import React, { Component } from 'react'
import './Formcss2.css'
import { TezosToolkit } from '@taquito/taquito'
import { BeaconWallet } from '@taquito/beacon-wallet';
    
class Form2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            bcredit: 0,
            bdebit: 0,
            credit: 0,
            date: "",
            debit: 0,
            


        }
        this.handleSubmit=this.handleSubmit.bind(this)
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
        console.log(this.state);
        const Tezos = new TezosToolkit('https://granadanet.smartpy.io')
        const options = { name: 'TECHX2' };
        const wallet = new BeaconWallet(options);

        wallet
        .requestPermissions({ network: { type: 'granadanet' } })
        .then((_) => wallet.getPKH())
        .then((address) => console.log(`Your address: ${address}`));

        Tezos.setWalletProvider(wallet);
        Tezos.wallet
            .at('KT1T5yC3M3sfPnaZQboG99VAphyaCPzmEkze')
            .then((contract) => {
                return contract.methods.Add_transaction(2,3,4,"2",3,"5").send();
            })
            .then(async(op) => {
                alert(`Registered Successfully !!!!`)
                return op.confirmation(1).then(() => op.hash);
            })
            .then((hash) => console.log(`Operation injected: https://granada.tzstats.com/${hash}`))
            .catch((error) => console.log(`Error: ${JSON.stringify(error, null, 2)}`));
        this.setState({
            name: "",
            bcredit: 0,
            bdebit: 0,
            credit: 0,
            date: "",
            debit: 0,
            
        })
     event.preventDefault()
    }




    render() {
        return (
            <div className="hello">
                <form onSubmit={this.handleSubmit}>
                    <h1>Transaction</h1>
                    <label>name :</label> <input type="text" value={this.state.name} onChange={this.namehandler} placeholder="name..." /><br />
                    <label>bcredit :</label> <input type="number" value={this.state.bcredit} onChange={this.bcredithandler} placeholder="bcredit..." /><br />
                    <label>bdebit :</label> <input type="number" value={this.state.bdebit} onChange={this.bdebithandler} placeholder="bdebit..." /><br />
                    <label>credit :</label> <input type="number" value={this.state.credit} onChange={this.credithandler} placeholder="credit..." /><br />
                    <label>date :</label> <input type="text" value={this.state.date} onChange={this.datehandler} placeholder="date..." /><br />
                    <label>debit :</label> <input type="number" value={this.state.debit} onChange={this.debithandler} placeholder="debit..." /><br />
                    
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form2