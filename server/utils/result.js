const createResult = (error, data) => {
    if (data) return createSuccessResult(data)
    else return createErrorResult(error)
}

const createSuccessResult = (data) => {
    return { status: 'success', data: data }
}

const createErrorResult = (error) => {
    return { status: 'error', error: error }
}

module.exports = { createErrorResult, createResult, createSuccessResult }