export const validateFile = (file) => {
  const allowedTypes = [
    'application/pdf',
    'application/msword',
  ]

  return allowedTypes.includes(file.type)
}