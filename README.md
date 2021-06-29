# api-bd
API to create and manage users

# Setup
1. Clone the repository
2. Copy and paste, and complete '.env'
3. Run 'npm install'
4. Run 'npm run dev' to development mode or 'npm run start'
5. Enjoy!

# Informations

Stack/Technology: Node.js, MongoDB, Mongoose, Moment, Axios, Express, Cors, Dotenv;

Public URL: [API](https://api-bemoldigital.herokuapp.com)

ROUTES:

    LIST:{
      url: '/users',
      method: GET
    }

    GET:{
      url: '/user/:id',
      method: GET
    }

    CREATE:{
      url: '/user',
      method: POST,
      body:{
        "name":{
            type: String,
            required: true
        },
        "email":{
            type:String,
            required: true
        },
        "cep":{
            type: Number,
            required: true
        },
        "bornDate":{
            type: String,
            required: true
        },
        "phoneContacts":{
            type: Array,
            required: true
        }
      }
    }


    UPDATE:{
      url:'/user/:id',
      method: PATCH
    }


    DELETE:{
      url:'/user/:id',
      method: DELETE
    }
