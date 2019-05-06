const saveSfyToken = token => {
  window.localStorage.setItem('sfy-access-token', JSON.stringify(token));
};

const deleteLocalSfyToken = type => window.localStorage.removeItem(type);

const getLocalSfyToken = type => {
  let token = '';
  const locToken = window.localStorage.getItem(type);
  if (locToken) {
    if (type === 'sfy-access-token') token = JSON.parse(locToken).accessToken;
    else token = locToken;
  }
  return token;
};

const deleteCoreTokens = () => {
  window.localStorage.removeItem('accessToken');
  window.localStorage.removeItem('refreshToken');
};

const authErrMsg = 'Not Authenticated!';

export { saveSfyToken, deleteLocalSfyToken, getLocalSfyToken, deleteCoreTokens, authErrMsg };
