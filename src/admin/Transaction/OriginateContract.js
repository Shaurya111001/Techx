import {importKey} from '@taquito/signer';
import TezosToolkit from '@taquito/taquito';
function contract(){
const FAUCET_KEY = {
    "mnemonic": [
        "average",
        "oblige",
        "arrow",
        "reunion",
        "connect",
        "setup",
        "consider",
        "devote",
        "peanut",
        "canal",
        "dinner",
        "noise",
        "ask",
        "arena",
        "image"
    ],
    "secret": "945e08fcbf7bb2cdd6023679d9c63e8b61bd9342",
    "amount": "54613484787",
    "pkh": "tz1WvExrfb4hPQZhoXeY8DqmmtvceYnDv8Pt",
    "password": "q0bpPnA9yc",
    "email": "vpzrkuhu.brekchkh@tezos.example.org"
}
importKey(
    Tezos,
    FAUCET_KEY.email,
    FAUCET_KEY.password,
    FAUCET_KEY.mnemonic.join(' '),
    FAUCET_KEY.secret
);
const Tezos = new TezosToolkit('https://api.tez.ie/rpc/delphinet')
Tezos.setProvider({ rpc: 'https://florencenet.smartpy.io' });

const STORAGE_JSON = { "prim": "Pair", "args": [ [], { "prim": "Pair", "args": [ { "int": "0" }, { "string": "tz1LHhpS2njctHppZS9FsesdQ3wu4wAnFhxT" } ] } ] }
const CODE_JSON = [
    {
      "prim": "storage",
      "args": [
        {
          "prim": "pair",
          "args": [
            {
              "prim": "big_map",
              "args": [
                { "prim": "nat" },
                {
                  "prim": "pair",
                  "args": [
                    {
                      "prim": "pair",
                      "args": [
                        { "prim": "int", "annots": [ "%bcredit" ] },
                        { "prim": "pair", "args": [ { "prim": "int", "annots": [ "%bdebit" ] }, { "prim": "int", "annots": [ "%credit" ] } ] }
                      ]
                    },
                    {
                      "prim": "pair",
                      "args": [
                        { "prim": "string", "annots": [ "%date" ] },
                        { "prim": "pair", "args": [ { "prim": "int", "annots": [ "%debit" ] }, { "prim": "string", "annots": [ "%name" ] } ] }
                      ]
                    }
                  ]
                }
              ],
              "annots": [ "%Ledger" ]
            },
            { "prim": "pair", "args": [ { "prim": "nat", "annots": [ "%ids" ] }, { "prim": "address", "annots": [ "%owner" ] } ] }
          ]
        }
      ]
    },
    {
      "prim": "parameter",
      "args": [
        {
          "prim": "or",
          "args": [
            {
              "prim": "pair",
              "args": [
                {
                  "prim": "pair",
                  "args": [
                    { "prim": "int", "annots": [ "%bcredit" ] },
                    { "prim": "pair", "args": [ { "prim": "int", "annots": [ "%bdebit" ] }, { "prim": "int", "annots": [ "%credit" ] } ] }
                  ]
                },
                {
                  "prim": "pair",
                  "args": [
                    { "prim": "string", "annots": [ "%date" ] },
                    { "prim": "pair", "args": [ { "prim": "int", "annots": [ "%debit" ] }, { "prim": "string", "annots": [ "%name" ] } ] }
                  ]
                }
              ],
              "annots": [ "%Add_transaction" ]
            },
            {
              "prim": "or",
              "args": [
                { "prim": "nat", "annots": [ "%delete_transaction" ] },
                {
                  "prim": "pair",
                  "args": [
                    {
                      "prim": "pair",
                      "args": [
                        { "prim": "int", "annots": [ "%bcredit" ] },
                        { "prim": "pair", "args": [ { "prim": "int", "annots": [ "%bdebit" ] }, { "prim": "int", "annots": [ "%credit" ] } ] }
                      ]
                    },
                    {
                      "prim": "pair",
                      "args": [
                        { "prim": "pair", "args": [ { "prim": "string", "annots": [ "%date" ] }, { "prim": "int", "annots": [ "%debit" ] } ] },
                        { "prim": "pair", "args": [ { "prim": "nat", "annots": [ "%ids" ] }, { "prim": "string", "annots": [ "%name" ] } ] }
                      ]
                    }
                  ],
                  "annots": [ "%edit_transaction" ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "prim": "code",
      "args": [
        [
          { "prim": "UNPAIR" },
          {
            "prim": "IF_LEFT",
            "args": [
              [
                { "prim": "SWAP" },
                { "prim": "DUP" },
                { "prim": "GET", "args": [ { "int": "3" } ] },
                { "prim": "PUSH", "args": [ { "prim": "nat" }, { "int": "1" } ] },
                { "prim": "ADD" },
                { "prim": "UPDATE", "args": [ { "int": "3" } ] },
                { "prim": "DUP" },
                { "prim": "CAR" },
                { "prim": "SWAP" },
                { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "3" } ] },
                { "prim": "GET", "args": [ { "int": "3" } ] },
                { "prim": "MEM" },
                {
                  "prim": "IF",
                  "args": [
                    [],
                    [
                      { "prim": "SWAP" },
                      { "prim": "DUP" },
                      { "prim": "DUG", "args": [ { "int": "2" } ] },
                      { "prim": "DUP" },
                      { "prim": "CAR" },
                      {
                        "prim": "PUSH",
                        "args": [
                          {
                            "prim": "option",
                            "args": [
                              {
                                "prim": "pair",
                                "args": [
                                  { "prim": "pair", "args": [ { "prim": "int" }, { "prim": "pair", "args": [ { "prim": "int" }, { "prim": "int" } ] } ] },
                                  { "prim": "pair", "args": [ { "prim": "string" }, { "prim": "pair", "args": [ { "prim": "int" }, { "prim": "string" } ] } ] }
                                ]
                              }
                            ]
                          },
                          {
                            "prim": "Some",
                            "args": [
                              {
                                "prim": "Pair",
                                "args": [
                                  { "prim": "Pair", "args": [ { "int": "0" }, { "prim": "Pair", "args": [ { "int": "0" }, { "int": "0" } ] } ] },
                                  { "prim": "Pair", "args": [ { "string": "" }, { "prim": "Pair", "args": [ { "int": "0" }, { "string": "" } ] } ] }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      { "prim": "DIG", "args": [ { "int": "4" } ] },
                      { "prim": "GET", "args": [ { "int": "3" } ] },
                      { "prim": "UPDATE" },
                      { "prim": "UPDATE", "args": [ { "int": "1" } ] },
                      { "prim": "SWAP" }
                    ]
                  ]
                },
                { "prim": "SWAP" },
                { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "2" } ] },
                { "prim": "DUP" },
                { "prim": "CAR" },
                { "prim": "DUP" },
                { "prim": "DIG", "args": [ { "int": "4" } ] },
                { "prim": "GET", "args": [ { "int": "3" } ] },
                { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "2" } ] },
                { "prim": "GET" },
                { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "13" } ] }, { "prim": "FAILWITH" } ], [] ] },
                { "prim": "DUP", "args": [ { "int": "5" } ] },
                { "prim": "GET", "args": [ { "int": "3" } ] },
                { "prim": "UPDATE", "args": [ { "int": "3" } ] },
                { "prim": "SOME" },
                { "prim": "SWAP" },
                { "prim": "UPDATE" },
                { "prim": "UPDATE", "args": [ { "int": "1" } ] },
                { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "2" } ] },
                { "prim": "DUP" },
                { "prim": "CAR" },
                { "prim": "DUP" },
                { "prim": "DIG", "args": [ { "int": "4" } ] },
                { "prim": "GET", "args": [ { "int": "3" } ] },
                { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "2" } ] },
                { "prim": "GET" },
                { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "14" } ] }, { "prim": "FAILWITH" } ], [] ] },
                { "prim": "DUP", "args": [ { "int": "5" } ] },
                { "prim": "GET", "args": [ { "int": "6" } ] },
                { "prim": "UPDATE", "args": [ { "int": "6" } ] },
                { "prim": "SOME" },
                { "prim": "SWAP" },
                { "prim": "UPDATE" },
                { "prim": "UPDATE", "args": [ { "int": "1" } ] },
                { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "2" } ] },
                { "prim": "DUP" },
                { "prim": "CAR" },
                { "prim": "DUP" },
                { "prim": "DIG", "args": [ { "int": "4" } ] },
                { "prim": "GET", "args": [ { "int": "3" } ] },
                { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "2" } ] },
                { "prim": "GET" },
                { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "15" } ] }, { "prim": "FAILWITH" } ], [] ] },
                { "prim": "DUP", "args": [ { "int": "5" } ] },
                { "prim": "GET", "args": [ { "int": "5" } ] },
                { "prim": "UPDATE", "args": [ { "int": "5" } ] },
                { "prim": "SOME" },
                { "prim": "SWAP" },
                { "prim": "UPDATE" },
                { "prim": "UPDATE", "args": [ { "int": "1" } ] },
                { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "2" } ] },
                { "prim": "DUP" },
                { "prim": "CAR" },
                { "prim": "DUP" },
                { "prim": "DIG", "args": [ { "int": "4" } ] },
                { "prim": "GET", "args": [ { "int": "3" } ] },
                { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "2" } ] },
                { "prim": "GET" },
                { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "16" } ] }, { "prim": "FAILWITH" } ], [] ] },
                { "prim": "UNPAIR" },
                { "prim": "UNPAIR" },
                { "prim": "SWAP" },
                { "prim": "CAR" },
                { "prim": "DUP", "args": [ { "int": "7" } ] },
                { "prim": "CAR" },
                { "prim": "GET", "args": [ { "int": "4" } ] },
                { "prim": "SWAP" },
                { "prim": "PAIR" },
                { "prim": "SWAP" },
                { "prim": "PAIR" },
                { "prim": "PAIR" },
                { "prim": "SOME" },
                { "prim": "SWAP" },
                { "prim": "UPDATE" },
                { "prim": "UPDATE", "args": [ { "int": "1" } ] },
                { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "2" } ] },
                { "prim": "DUP" },
                { "prim": "CAR" },
                { "prim": "DUP" },
                { "prim": "DIG", "args": [ { "int": "4" } ] },
                { "prim": "GET", "args": [ { "int": "3" } ] },
                { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "2" } ] },
                { "prim": "GET" },
                { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "17" } ] }, { "prim": "FAILWITH" } ], [] ] },
                { "prim": "UNPAIR" },
                { "prim": "UNPAIR" },
                { "prim": "SWAP" },
                { "prim": "CDR" },
                { "prim": "DUP", "args": [ { "int": "7" } ] },
                { "prim": "CAR" },
                { "prim": "GET", "args": [ { "int": "3" } ] },
                { "prim": "PAIR" },
                { "prim": "SWAP" },
                { "prim": "PAIR" },
                { "prim": "PAIR" },
                { "prim": "SOME" },
                { "prim": "SWAP" },
                { "prim": "UPDATE" },
                { "prim": "UPDATE", "args": [ { "int": "1" } ] },
                { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "2" } ] },
                { "prim": "DUP" },
                { "prim": "CAR" },
                { "prim": "DUP" },
                { "prim": "DIG", "args": [ { "int": "4" } ] },
                { "prim": "GET", "args": [ { "int": "3" } ] },
                { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "2" } ] },
                { "prim": "GET" },
                { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "18" } ] }, { "prim": "FAILWITH" } ], [] ] },
                { "prim": "UNPAIR" },
                { "prim": "CDR" },
                { "prim": "DIG", "args": [ { "int": "5" } ] },
                { "prim": "CAR" },
                { "prim": "CAR" },
                { "prim": "PAIR" },
                { "prim": "PAIR" },
                { "prim": "SOME" },
                { "prim": "SWAP" },
                { "prim": "UPDATE" },
                { "prim": "UPDATE", "args": [ { "int": "1" } ] }
              ],
              [
                {
                  "prim": "IF_LEFT",
                  "args": [
                    [
                      { "prim": "SWAP" },
                      { "prim": "DUP" },
                      { "prim": "DUG", "args": [ { "int": "2" } ] },
                      { "prim": "GET", "args": [ { "int": "4" } ] },
                      { "prim": "SENDER" },
                      { "prim": "COMPARE" },
                      { "prim": "EQ" },
                      {
                        "prim": "IF",
                        "args": [
                          [],
                          [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "WrongCondition: sp.sender == self.data.owner" } ] }, { "prim": "FAILWITH" } ]
                        ]
                      },
                      { "prim": "SWAP" },
                      { "prim": "DUP" },
                      { "prim": "CAR" },
                      {
                        "prim": "NONE",
                        "args": [
                          {
                            "prim": "pair",
                            "args": [
                              { "prim": "pair", "args": [ { "prim": "int" }, { "prim": "pair", "args": [ { "prim": "int" }, { "prim": "int" } ] } ] },
                              { "prim": "pair", "args": [ { "prim": "string" }, { "prim": "pair", "args": [ { "prim": "int" }, { "prim": "string" } ] } ] }
                            ]
                          }
                        ]
                      },
                      { "prim": "DIG", "args": [ { "int": "3" } ] },
                      { "prim": "UPDATE" },
                      { "prim": "UPDATE", "args": [ { "int": "1" } ] }
                    ],
                    [
                      { "prim": "SWAP" },
                      { "prim": "DUP" },
                      { "prim": "DUG", "args": [ { "int": "2" } ] },
                      { "prim": "GET", "args": [ { "int": "4" } ] },
                      { "prim": "SENDER" },
                      { "prim": "COMPARE" },
                      { "prim": "EQ" },
                      {
                        "prim": "IF",
                        "args": [
                          [],
                          [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "WrongCondition: sp.sender == self.data.owner" } ] }, { "prim": "FAILWITH" } ]
                        ]
                      },
                      { "prim": "SWAP" },
                      { "prim": "DUP" },
                      { "prim": "CAR" },
                      { "prim": "DUP" },
                      { "prim": "DUP", "args": [ { "int": "4" } ] },
                      { "prim": "GET", "args": [ { "int": "5" } ] },
                      { "prim": "DUP" },
                      { "prim": "DUG", "args": [ { "int": "2" } ] },
                      { "prim": "GET" },
                      { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "23" } ] }, { "prim": "FAILWITH" } ], [] ] },
                      { "prim": "DUP", "args": [ { "int": "5" } ] },
                      { "prim": "GET", "args": [ { "int": "3" } ] },
                      { "prim": "CAR" },
                      { "prim": "UPDATE", "args": [ { "int": "3" } ] },
                      { "prim": "SOME" },
                      { "prim": "SWAP" },
                      { "prim": "UPDATE" },
                      { "prim": "UPDATE", "args": [ { "int": "1" } ] },
                      { "prim": "DUP" },
                      { "prim": "CAR" },
                      { "prim": "DUP" },
                      { "prim": "DUP", "args": [ { "int": "4" } ] },
                      { "prim": "GET", "args": [ { "int": "5" } ] },
                      { "prim": "DUP" },
                      { "prim": "DUG", "args": [ { "int": "2" } ] },
                      { "prim": "GET" },
                      { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "24" } ] }, { "prim": "FAILWITH" } ], [] ] },
                      { "prim": "DUP", "args": [ { "int": "5" } ] },
                      { "prim": "GET", "args": [ { "int": "6" } ] },
                      { "prim": "UPDATE", "args": [ { "int": "6" } ] },
                      { "prim": "SOME" },
                      { "prim": "SWAP" },
                      { "prim": "UPDATE" },
                      { "prim": "UPDATE", "args": [ { "int": "1" } ] },
                      { "prim": "DUP" },
                      { "prim": "CAR" },
                      { "prim": "DUP" },
                      { "prim": "DUP", "args": [ { "int": "4" } ] },
                      { "prim": "GET", "args": [ { "int": "5" } ] },
                      { "prim": "DUP" },
                      { "prim": "DUG", "args": [ { "int": "2" } ] },
                      { "prim": "GET" },
                      { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "25" } ] }, { "prim": "FAILWITH" } ], [] ] },
                      { "prim": "DUP", "args": [ { "int": "5" } ] },
                      { "prim": "GET", "args": [ { "int": "3" } ] },
                      { "prim": "CDR" },
                      { "prim": "UPDATE", "args": [ { "int": "5" } ] },
                      { "prim": "SOME" },
                      { "prim": "SWAP" },
                      { "prim": "UPDATE" },
                      { "prim": "UPDATE", "args": [ { "int": "1" } ] },
                      { "prim": "DUP" },
                      { "prim": "CAR" },
                      { "prim": "DUP" },
                      { "prim": "DUP", "args": [ { "int": "4" } ] },
                      { "prim": "GET", "args": [ { "int": "5" } ] },
                      { "prim": "DUP" },
                      { "prim": "DUG", "args": [ { "int": "2" } ] },
                      { "prim": "GET" },
                      { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "26" } ] }, { "prim": "FAILWITH" } ], [] ] },
                      { "prim": "UNPAIR" },
                      { "prim": "UNPAIR" },
                      { "prim": "SWAP" },
                      { "prim": "CAR" },
                      { "prim": "DUP", "args": [ { "int": "7" } ] },
                      { "prim": "CAR" },
                      { "prim": "GET", "args": [ { "int": "4" } ] },
                      { "prim": "SWAP" },
                      { "prim": "PAIR" },
                      { "prim": "SWAP" },
                      { "prim": "PAIR" },
                      { "prim": "PAIR" },
                      { "prim": "SOME" },
                      { "prim": "SWAP" },
                      { "prim": "UPDATE" },
                      { "prim": "UPDATE", "args": [ { "int": "1" } ] },
                      { "prim": "DUP" },
                      { "prim": "CAR" },
                      { "prim": "DUP" },
                      { "prim": "DUP", "args": [ { "int": "4" } ] },
                      { "prim": "GET", "args": [ { "int": "5" } ] },
                      { "prim": "DUP" },
                      { "prim": "DUG", "args": [ { "int": "2" } ] },
                      { "prim": "GET" },
                      { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "27" } ] }, { "prim": "FAILWITH" } ], [] ] },
                      { "prim": "UNPAIR" },
                      { "prim": "UNPAIR" },
                      { "prim": "SWAP" },
                      { "prim": "CDR" },
                      { "prim": "DUP", "args": [ { "int": "7" } ] },
                      { "prim": "CAR" },
                      { "prim": "GET", "args": [ { "int": "3" } ] },
                      { "prim": "PAIR" },
                      { "prim": "SWAP" },
                      { "prim": "PAIR" },
                      { "prim": "PAIR" },
                      { "prim": "SOME" },
                      { "prim": "SWAP" },
                      { "prim": "UPDATE" },
                      { "prim": "UPDATE", "args": [ { "int": "1" } ] },
                      { "prim": "DUP" },
                      { "prim": "CAR" },
                      { "prim": "DUP" },
                      { "prim": "DUP", "args": [ { "int": "4" } ] },
                      { "prim": "GET", "args": [ { "int": "5" } ] },
                      { "prim": "DUP" },
                      { "prim": "DUG", "args": [ { "int": "2" } ] },
                      { "prim": "GET" },
                      { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "28" } ] }, { "prim": "FAILWITH" } ], [] ] },
                      { "prim": "UNPAIR" },
                      { "prim": "CDR" },
                      { "prim": "DIG", "args": [ { "int": "5" } ] },
                      { "prim": "CAR" },
                      { "prim": "CAR" },
                      { "prim": "PAIR" },
                      { "prim": "PAIR" },
                      { "prim": "SOME" },
                      { "prim": "SWAP" },
                      { "prim": "UPDATE" },
                      { "prim": "UPDATE", "args": [ { "int": "1" } ] }
                    ]
                  ]
                }
              ]
            ]
          },
          { "prim": "NIL", "args": [ { "prim": "operation" } ] },
          { "prim": "PAIR" }
        ]
      ]
    }
  ]
  Tezos.estimate.originate({
      code: CODE_JSON,
      init: STORAGE_JSON
    })
    .then(operation => {
      print(operation.totalCost)
    })
    .catch(error => {
      print(error)
    })
    Tezos.contract.originate({
        code: CODE_JSON,
        init: STORAGE_JSON
    }).then(origination => {
        print(`Origination waiting confirmation...`);
        return origination.contract()
    }).then(contract => {
        print(`Origination completed.`);
        print(`Contract: ${contract.address}`)
    })
    .catch(error => print(error))
}   
export default contract;  