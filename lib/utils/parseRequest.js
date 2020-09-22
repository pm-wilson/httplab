module.exports = rawRequest => {
  const [method, path] = rawRequest.split(' ');
  const bodyIncluded = !!rawRequest.split('{')[1];
  const body = '{' + rawRequest.split('{')[1];

  const parsed = { method, path };

  if(bodyIncluded) {
    parsed.body = body;
  }

  return parsed;
};
