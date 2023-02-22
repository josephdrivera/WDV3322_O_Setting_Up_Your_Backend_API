const axios = require('axios');

const email = 'jworkman@fullsail.com';
const phone = '407-555-5555';
const birthday = '12/31/1980';
const password = 'asdf1234';

test('API is reachable.Make sure it is running on http://localhost:3000', () => {
    const response = axios.get('http://localhost:3000')
    return response.then(({ status }) => {
        expect(status).toBe(200);
    }).catch((response) => {
        expect(response.code).not.toBe('ECONNREFUSED');
    });
});

test('User signup endpoint is defined/setup correctly to URL path of "/signup" ', () => {
    const response = axios.post('http://localhost:3000/signup')
    return response.catch((response) => {
        expect(response.code).not.toBe(404);
    }
    );
});

test('User signup endpoint results in 2xx response when all valid data is submitted', () => {
    const response = axios.post('http://localhost:3000/signup', {
        email,
        phone,
        birthday,
        password
    })
    return response.then(({ status }) => {
        expect(status).toBe(200);
    }).catch((response) => {
        expect(response.status).toBeGreaterThanOrEqual(200);
        expect(response.status).toBeLessThanOrEqual(299);
    });
});

test('User signup endpoint validates the email field', () => {
    const response = axios.post("http://localhost:3000/signup", {
        phone, birthday, password
    })
    return response.catch(({ response }) => {
        expect(response.status).toBe(422)
        expect(response.data.message).toContain('email')
    });
});

test('User signup endpoint validates the phone field', () => {
    const response = axios.post("http://localhost:3000/signup", {
        email, birthday, password
    })
    return response.catch(({ response }) => {
        expect(response.status).toBe(422)
        expect(response.data.message).toContain('phone')
    });
}
);

test('User signup endpoint validates the birthday field', () => {
    const response = axios.post("http://localhost:3000/signup", {
        email, phone, password
    })
    return response.catch(({ response }) => {
        expect(response.status).toBe(422)
        expect(response.data.message).toContain('birthday')
    });
}
);

test('User signup endpoint validates the password field', () => {
    const response = axios.post("http://localhost:3000/signup", {
        email, phone, birthday
    })
    return response.catch(({ response }) => {
        expect(response.status).toBe(422)
        expect(response.data.message).toContain('password')
    });
}
);

