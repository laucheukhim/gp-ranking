# GP Ranking

https://laucheukhim.github.io/gp-ranking/

## Data source

- https://www.gp-patient.co.uk/surveysandreports
- https://www.getthedata.com/open-postcode-geo-api

## Development

### Install
```
npm install
```

### Process data

Download "GP Practice" -> "Practice data (weighted) (.csv)" from https://www.gp-patient.co.uk/surveysandreports. Place it in `/data/practices.csv`. Then run:

```
npm run practices:init
```

### Run in local
```
npm run serve
```

### Build for production
```
npm run build
```
