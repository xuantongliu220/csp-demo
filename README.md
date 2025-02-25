# Steps to Reproduce This Issue

## Clone this repo

``` bash
git clone git@github.com:xuantongliu220/csp-demo.git 
```

## Install dependencies

```bash
npm install
```

## Build the project

```bash
npm run build
```

## Create `dist/serve.json`

``` json
{
  "headers": [
    {
      "source": "**/*",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self'; style-src 'self';"
        }
      ]
    }
  ]
}
```

## Run in production mode

```bash
npx serve dist
```

## Turn on `unsafe-eval`

`Modify dist/serve.json to allow 'unsafe-eval', which allows the app to work without errors. However, this is not the desired solution. We would rather avoid using 'unsafe-eval' for security reasons, so we want the AsyncAPI parser to run without the dependency on 'unsafe-eval'.`

``` json
{
  "headers": [
    {
      "source": "**/*",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self';"
        }
      ]
    }
  ]
}
```

## Check Content-Security-Policy (CSP)

`You can also check it in broswer (inspect-Network)`

``` bash
curl -I http://localhost:3000 
```