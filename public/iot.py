import requests
import json


jwt_endpoint_url = 'http://localhost:3000/auth/login'

payload_data = {
    "email": "jeftest@gmail.com",
    "password": "123"
}

response = requests.post(jwt_endpoint_url, json=payload_data)

if response.status_code == 200:
    jwt_token = response.json()['token']

    other_endpoint_url = 'http://localhost:3000/payment/registerPayment'
    headers = {
        'Authorization': 'Bearer ' + jwt_token,
        'Content-Type': 'application/json'  
    }
    body_data = {
        "price": {
            "value": 25.00
        },
        "payment_type": {
            "paymentType": 4
        }
    }
    
    body = json.dumps(body_data)


    other_response = requests.get(other_endpoint_url, headers=headers, data=body)

    if other_response.status_code == 200:
        print('Request successful!')
        print('Response:', other_response.json())
    else:
        print('Request to other endpoint failed with status code:', other_response.status_code)
else:
    print('JWT token generation request failed with status code:', response.status_code)
