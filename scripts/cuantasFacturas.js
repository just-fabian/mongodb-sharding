db.getMongo().setReadPref("secondary")
use('finanzas')
db.facturas.countDocuments()