import axiosApi from "../infra/Axios"

export enum Dias {
  Domingo = 0,
  Segunda = 1,
  Terca = 2,
  Quarta = 3,
  Quinta = 4,
  Sexta = 5,
  Sabado = 6,
}

export type PostAgendamentoDTO = {
  horarioInicial: string
  horarioFinal: string
  dataInicio: string
  dataFim: string

  cpfUsuario: string
  emailUsuario: string

  idQuadra: number

  statusAgendamento: number
  presenca: boolean
  evento: boolean
  recorrente: boolean
  diasSemana: Dias[]
}

export type AgendamentoDTO = {
  id: number
  horarioInicial: string
  horarioFinal: string
  dataInicio: string
  dataFim: string
  cpfUsuario: string
  idQUadra: number
  statusAgendamento: number
  statusAgendamentoAux: string
  emailUsuario: string
  presenca: boolean
  evento: boolean
  recorrente: boolean
  diasSemana: number[]
}
// {
//   "id": 1,
//   "horarioInicial": "08:30:00",
//   "horarioFinal": "10:00:00",
//   "dataInicio": "2023-11-07T00:00:00",
//   "dataFim": "2023-11-07T00:00:00",
//   "cpfUsuario": "12312312312",
//   "idQUadra": 1,
//   "statusAgendamento": 0,
//   "statusAgendamentoAux": "reservado",
//   "emailUsuario": "P@P.COM",
//   "presenca": false,
//   "evento": false,
//   "recorrente": false,
//   "diasSemana": null
// },

export default class AgendamentoService {
  private static verb = "/Agendamento"

  static async GetAgendamentos() {
    const response = await axiosApi.instance.get<AgendamentoDTO[]>(this.verb)

    return response.data
  }

  static async GetAgendamentosDoBloco(idBloco: number) {
    const response = await axiosApi.instance.get<AgendamentoDTO[]>(`${this.verb}/AgendamentosDoBloco/${idBloco}`)

    return response.data
  }

  static async PostAgendamento(payload: PostAgendamentoDTO) {
    const response = await axiosApi.instance.post<{ agendamento: AgendamentoDTO }>(this.verb, payload)

    return response.data.agendamento
  }

  static async DeleteAgendamento(id: number) {
    await axiosApi.instance.delete(`${this.verb}/${id}`)
  }

}