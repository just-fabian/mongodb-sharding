db.getMongo().setReadPref("secondary")
use('finanzas')
db.facturas.find({"cliente.region": "CABA", "condPago": "CONTADO" }).limit(2).pretty()