import React from 'react'

const Input = React.forwardRef(
  ({ id, type, placeholder, value, required, onChange, ...rest }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-black focus:border-black disabled:cursor-not-allowed disabled:opacity-50'
          id={id}
          required={required}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </div>
    )
  }
)

export default Input
