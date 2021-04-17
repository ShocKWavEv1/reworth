const ROOT = 'https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest';
const DIRECOTRY = '/directory?epp=12&p='
const GET_DIRECTORY = {
    getDirectory: (perPage) => {
        let status = null;
        return fetch(`${ROOT}${DIRECOTRY}${perPage}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }).then((response) => { status = response.status; return response.json() })
            .then((data) => {
                return data
            })
            .catch((error) => {
                return error
            });
    }
};

export default GET_DIRECTORY;