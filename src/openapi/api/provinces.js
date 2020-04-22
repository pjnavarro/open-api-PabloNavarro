module.exports = {
    '/api/provinces': {
        get: {
            security: [],
            summary: 'List Provinces',
            parameters: [
                {
                    in: 'query',
                    name: 'code',
                    schema: {
                        type: 'string',
                        pattern: '^[A-Z]{2}$'
                    },
                    description: 'Código de la provincia solicitado'
                }
            ],
            responses: {
                200: {
                    description: 'list of Provinces',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: {$ref: '#/components/schemas/Provinces'}
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        },
        post: {
            security: [],
            requestBody: {
                description: 'Optional description in *Markdown*',
                required: true,
                content: {'application/json': {schema: {$ref: '#/components/schemas/Provinces'}}}
            },
            responses: {
                200: {
                    description: 'list of Provinces',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        }
    },
    '/api/provinces/{id}': {
        get: {
            security: [],
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    },
                    required: true,
                    description: 'Id de la provincia solicitada'
                }
            ],
            responses: {
                200: {
                    description: 'list of Provinces',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Provinces'}}}
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        },
        put: {
            security: [],
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    },
                    required: true,
                    description: 'Id de la provincia solicitada'
                }
            ],
            requestBody: {
                description: 'Optional description in *Markdown*',
                required: true,
                content: {'application/json': {schema: {$ref: '#/components/schemas/Provinces'}}}
            },
            responses: {
                200: {
                    description: 'list of Provinces',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        },
        delete: {
            security: [],
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    },
                    required: true,
                    description: 'Id de la provincia solicitada'
                }
            ],
            responses: {
                200: {
                    description: 'list of Provinces',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        }
    }
};
