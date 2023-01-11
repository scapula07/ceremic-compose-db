// This is an auto-generated file, do not edit manually
export const definition = {"models":{"Appointment":{"id":"kjzl6hvfrbw6c975ug2wuiytnupk25puw3n37012ujdw3ecrzv8z3o0bct05u7d","accountRelation":{"type":"single"}},"Doctor":{"id":"kjzl6hvfrbw6c69fvzu3ynd1uqg1biregfque85xttm1g6feto71p8l3xtur3uo","accountRelation":{"type":"single"}},"Patient":{"id":"kjzl6hvfrbw6capbb5ai92ga2q03dabe1kl1hyf4phh31yxc3c270dem1mmqf1w","accountRelation":{"type":"single"}}},"objects":{"Appointment":{"date":{"type":"string","required":true},"doctorName":{"type":"string","required":true},"patientName":{"type":"string","required":true},"appointmentId":{"type":"view","viewType":"documentAccount"}},"Doctor":{"fee":{"type":"string","required":true},"gender":{"type":"string","required":true},"lastName":{"type":"string","required":true},"firstName":{"type":"string","required":true},"specialization":{"type":"string","required":true},"doctorsId":{"type":"view","viewType":"documentAccount"}},"Patient":{"email":{"type":"string","required":true},"gender":{"type":"string","required":true},"imgUrl":{"type":"string","required":true},"address":{"type":"string","required":true},"lastName":{"type":"string","required":true},"diagnosis":{"type":"string","required":false},"firstName":{"type":"string","required":true},"recordCids":{"type":"list","required":false,"item":{"type":"string","required":false}},"patientd":{"type":"view","viewType":"documentAccount"}}},"enums":{},"accountData":{"appointment":{"type":"node","name":"Appointment"},"doctor":{"type":"node","name":"Doctor"},"patient":{"type":"node","name":"Patient"}}}