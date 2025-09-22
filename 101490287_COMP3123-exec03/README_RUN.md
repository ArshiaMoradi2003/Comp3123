# How to Run

```bash
npm install
npm start
```

Endpoints to test:

```bash
curl -i http://localhost:3000/
curl -s http://localhost:3000/employee | jq .
curl -s http://localhost:3000/employee/names | jq .
curl -s http://localhost:3000/employee/totalsalary | jq .
```
