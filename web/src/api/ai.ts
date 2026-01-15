import type {
    AIServiceConfig,
    AIServiceType,
    CreateAIConfigRequest,
    TestConnectionRequest,
    UpdateAIConfigRequest
} from '../types/ai'
import request from '../utils/request'

export const aiAPI = {
  list(serviceType?: AIServiceType) {
    return request.get<AIServiceConfig[]>('/ai-configs', {
      params: { service_type: serviceType }
    })
  },

  create(data: CreateAIConfigRequest) {
    return request.post<AIServiceConfig>('/ai-configs', data)
  },

  get(id: number) {
    return request.get<AIServiceConfig>(`/ai-configs/${id}`)
  },

  update(id: number, data: UpdateAIConfigRequest) {
    return request.put<AIServiceConfig>(`/ai-configs/${id}`, data)
  },

  delete(id: number) {
    return request.delete(`/ai-configs/${id}`)
  },

  testConnection(data: TestConnectionRequest) {
    return request.post('/ai-configs/test', data)
  },

  // 获取自定义服务商的模型列表
  fetchModels(baseUrl: string, apiKey: string) {
    return request.post<{ models: string[] }>('/ai-configs/models', {
      base_url: baseUrl,
      api_key: apiKey
    })
  }
}
