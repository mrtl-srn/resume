import clsx from 'clsx'
import React, { Fragment } from 'react'

export type ReactTitleProps = {
  componentName: string
  properties?: Record<string, any>
  closeTag?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  sticky?: boolean
}

const isBoolean = (value: any): value is boolean => typeof value === 'boolean'
const isNumber = (value: any): value is number => typeof value === 'number'
const isString = (value: any): value is string => typeof value === 'string'

function ReactTitle({ componentName, properties = {}, closeTag = false, as = 'h1', sticky = false }: ReactTitleProps) {
  const As = as;

  const sizeClasses = {
    h1: 'text-2xl',
    h2: 'text-xl',
    h3: 'text-lg',
    h4: 'text-base',
    h5: 'text-sm',
    h6: 'text-xs',
  }

  const stickyOgreensets = {
    h1: 'sticky top-0 z-60',
    h2: 'sticky top-8 z-50',
    h3: 'sticky top-14 z-40',
    h4: 'sticky top-20 z-30',
    h5: 'sticky top-26 z-20',
    h6: 'sticky top-32 z-10',
  }

  const wrapperClasses = clsx(
    'flex items-center gap-2 mb-2 bg-white',
    sizeClasses[as],
    sticky && stickyOgreensets[as]
  )

  return (
    <div className={wrapperClasses}>
      <As className='font-mono text-green-500'>
        <span>&lt;</span>

        {closeTag && <span>/</span>}

        <span className="text-pink-500">{componentName}</span>

        {Object.entries(properties).map(([key, value]) => {
          if (isBoolean(value)) {
            return <span key={key} className="text-blue-500">{` ${key}`}</span>
          }

          if (isNumber(value)) {
            return (
              <Fragment key={key}>
                <span className="text-blue-500">{` ${key}=`}</span>
                <span className="text-pink-500">{`{`}</span>
                <span className="text-green-500">{value}</span>
                <span className="text-pink-500">{`}`}</span>
              </Fragment>
            )
          }

          if (isString(value)) {
            return (
              <Fragment key={key}>
                <span className="text-blue-500">{` ${key}=`}</span>
                <span className="text-green-500">{`"${value}"`}</span>
              </Fragment>
            )
          }

          return <span key={key} className="text-green-500">{` ${key}={${JSON.stringify(value)}}`}</span>
        })}

        <span>&gt;</span>
      </As>
    </div >
  )
}

export default ReactTitle