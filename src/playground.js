import { View } from 'utopia-api'
import '../public/globals.css'

export var Playground = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        contain: 'layout',
      }}
      data-uid='a7b'
    >
      {[].length === 0 ? (
        [].length === 0 ? (
          <div
            style={{
              height: 150,
              width: 150,
              position: 'absolute',
              left: 154,
              top: 134,
              backgroundColor: 'lightblue',
            }}
            data-uid='bla'
          />
        ) : null
      ) : (
        <div
          style={{
            height: 150,
            position: 'absolute',
            left: 154,
            top: 134,
          }}
          data-uid='b15'
        >
          <img
            src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.jpg?raw=true'
            alt='Utopia logo'
            style={{ height: '100%' }}
            data-uid='b0e'
          />
        </div>
      )}
      <div
        style={{
          height: 150,
          width: 150,
          position: 'absolute',
          left: 300,
          top: 300,
          backgroundColor: 'darkblue',
        }}
        data-uid='blc'
      />
      <img
        data-aspect-ratio-locked
        src='./assets/Fire Giants Concepts.jpg'
        style={{
          width: 1410,
          height: 636,
          contain: 'layout',
        }}
        data-uid='0aa'
      />
    </div>
  )
}
