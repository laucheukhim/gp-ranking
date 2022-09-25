# GP Ranking

https://laucheukhim.github.io/gp-ranking/

## Data source

- [NHS Digital General practice data collections](https://digital.nhs.uk/data-and-information/data-collections-and-data-sets/data-collections/general-practice-data-collections)
- [GP Patient Survey](https://www.gp-patient.co.uk/surveysandreports)
- [Open Postcode Geo](https://www.getthedata.com/open-postcode-geo-api)

## Development

### Install
```
npm install
```

### Process data

1. Download ["GP submitted inner catchment area files"](https://digital.nhs.uk/data-and-information/data-collections-and-data-sets/data-collections/general-practice-data-collections) and extract the "main" folder in the ZIP file as `/data/catchment`.
2. Download ["GP Practice" -> "Practice data (weighted) (.csv)"](https://www.gp-patient.co.uk/surveysandreports) and place it as `/data/survey/practices.csv`.
3. Run:

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
