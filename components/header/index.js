import React from 'react';
import Link from 'next/link';
export default function Header() {
  return (
      <div className="z-40 px-0 navbar bg-base-100">
          <div className="flex-1">
              <Link href='/'>
                  <a className="text-xl normal-case btn btn-ghost">NextJS in a minute</a>
              </Link>
          </div>
          <div className="flex-none">
              <ul className="p-0 menu menu-horizontal">
                  <li tabIndex="0">
                      <a>
                          SSG
                          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                      </a>
                      <ul className="z-40 p-2 bg-base-100">
                            <li>
                                <Link href='/ssg/withdata'>
                                    SSG with Data
                                </Link>
                            </li>
                            <li>
                                <Link href='/ssg/withoutdata'>
                                    SSG without Data
                                </Link>
                            </li>
                          <li>
                              <Link href='/'>
                                  ISR
                              </Link>
                          </li>
                      </ul>
                  </li>
                  <li tabIndex="1">
                      <Link href='/ssr'>
                          SSR
                      </Link>
                  </li>
              </ul>
          </div>
      </div>
  )
}
