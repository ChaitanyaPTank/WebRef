JWT = JSON Web Token
JWT has 3 parts: -> (.) : xxxx.yyyy.zzzz
    - header -> it is base64URL -encoded JSON object
    - payloads -> has claims which are about user and additional data
            -> There are 3 different types of claims
                -> Private
                -> Public
                -> Registered
    - signature
        -> The JWT signature field is created by taking the encoded header, the encoded payload,
        a secret key, and using the algorithm specified in the header to cryptographically sign
        these values
