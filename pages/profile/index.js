import noLayout from '../../layouts/noLayout'

function Index() {
  return (
    <div class='font-mono'>
      <div class='bg-gray-100 min-h-screen'>
        <div class='mx-auto flex w-4/5 py-20'>
          <div class='sm:w-3/5'>
            <div class=''>
              <div class='Header'>
                <h3 class='text-3xl'>Alex Cosmas</h3>
                <span class='text-sm'>
                  Design Thinker | Product Designer | Frontend Developer
                </span>
              </div>

              <div class='pt-8'>
                <h1 class='text-2xl'>Hello there, Welcome to my website!</h1>
                <p>
                  As the saying goes, Simplicity is the greatest form of
                  sorphisication. <br />
                  Inspired by Steve, Adam and many other developers on the net,
                  I purposely designed this space, aiming to rely information of
                  who I am, what I do and how I do what I do concisely without
                  many design features in way.
                </p>
              </div>

              <div class='pt-8'>
                <h1 class='text-2xl'>Who am I ?</h1>
                <div>
                  <p>
                    I am a versatile designer from Nairobi,Kenya who loves
                    solving challenges for the web through design and code.{' '}
                    <a href=''>Learn more...</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class='sm:w-2/5'>
            <div class=''>
              <div class='py-3'>
                <div class='flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-6 w-6 mr-2'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M4 6h16M4 12h16M4 18h7'
                    />
                  </svg>
                  Menu
                </div>
              </div>
              <div class='px-8'>
                <ul class='my-4'>
                  <li>About me</li>
                  <li>My projects</li>
                  <li>My initiatives</li>
                  <li>All my posts</li>
                  <li>Get in touch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
Index.Layout = noLayout
export default Index
