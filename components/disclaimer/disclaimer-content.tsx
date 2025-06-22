import React from 'react'

import { cn } from '@/lib/utils'

interface DisclaimerContentProps {
  isHideHeader?: boolean
}

export const DisclaimerContent = ({
  isHideHeader = false,
}: DisclaimerContentProps) => {
  return (
    <>
      {isHideHeader ? null : (
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Disclaimer
            </h2>
            <p className="text-sm text-muted-foreground">
              Please read this disclaimer carefully before using the service
              operated by us.
            </p>
          </div>
        </div>
      )}
      <div
        className={cn(
          'flex flex-col items-center gap-4',
          isHideHeader ? '' : 'my-4'
        )}
      >
        <p className="text-base text-muted-foreground">
          hdstream is a free online movie and TV show streaming website that
          allows users to watch content sourced from third parties. hdstream
          does not upload, host, own or store any movies, TV shows or video
          content displayed on the site. All content is provided by external
          sources and streamed directly from third party servers.
        </p>
        <p className="text-base text-muted-foreground">
          hdstream has no control over the content quality, availability,
          copyright, legality or validity of the third party material viewed via
          the site. hdstream cannot be held responsible for any streaming
          content on the site, whether authorized or unauthorized. Users are
          responsible for verifying they have the legal right to view any
          streamed content.
        </p>
        <p className="text-base text-muted-foreground">
          The operators of hdstream make no warranties or representations about
          the site or any of the content, and assume no liability for any costs,
          damages or losses from the use of the site. By using hdstream, you
          agree that access is provided “as is” at your own risk.
        </p>
        <div className="text-base text-muted-foreground">
          <p>Copyright Infringement:</p>
          hdstream respects the intellectual property rights of others. Users
          are prohibited from using hdstream to engage in copyright infringement
          or the unauthorized distribution of copyrighted content. Reely.site
          will promptly remove or disable access to any infringing content upon
          receipt of proper notification from the copyright holder.
        </div>
        <div className="text-base text-muted-foreground">
          <p>No Endorsement:</p>
          <p>
            The content accessible through hdstream does not constitute an
            endorsement by the website operators of any third party content
            providers, services, or products. References and links to third
            party content are provided for informational and entertainment
            purposes only.
          </p>
        </div>
        <div className="text-base text-muted-foreground">
          <p>Age Restricted Content:</p>
          <p>
            hdstream does not knowingly collect or distribute content considered
            obscene or harmful to minors as defined by applicable law. However,
            hdstream has no control over third party content and some material
            accessible through hdstream may be inappropriate for minors. Parents
            are advised to supervise minors using the service.
          </p>
        </div>
        <div className="text-base text-muted-foreground">
          <p>No Warranties:</p>
          <p>
            hdstream provides access to third party content on an “as is” basis
            without warranties of any kind, express or implied. The website
            operators make no guarantees regarding the accuracy, currency,
            suitability, completeness, usefulness, safety or intellectual
            property rights related to any accessible content.
          </p>
        </div>
        <div className="text-base text-muted-foreground">
          <p>Limitation of Liability:</p>
          <p>
            In no event shall hdstream be liable for any direct, indirect,
            punitive, incidental or consequential damages arising out of the
            use, inability to use, or unavailability of the service or any
            content accessible on the site. Users agree to fully indemnify and
            hold harmless hdstream and its operators from any claims arising
            from use of the service.
          </p>
        </div>
      </div>
    </>
  )
}
