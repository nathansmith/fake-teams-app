import { css } from 'styled-system/css';
import { getDomain, getMapUrl, textToHtml } from '~/utils';
import Image from '~/common/Image';
import FlexStack from '~/common/FlexStack';
import Link from '~/common/Link';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface ICollege {
  address: string;
  division: string;
  image: string;
  name: string;
  urlForSchool: string;
  urlForTeam: string;
}

// ==========
// Component.
// ==========

const College: Component<ICollege> = (props) => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <div
      class={css({
        display: 'grid',
        gap: '{spacing.5}',

        // Media query.
        sm: {
          gridTemplateColumns: 'auto 1fr',
        },
      })}
    >
      <Image
        //
        alt={props.name}
        cssRaw={css.raw({
          aspectRatio: '8 / 5',
          width: '100%',

          // Media query.
          sm: {
            width: '300px',
          },
        })}
        imagePosition="0 0"
        src={props.image}
      />

      <FlexStack>
        <h4>{props.name}</h4>

        <table
          class={css({
            alignSelf: 'start',

            '& tr:not(:first-child) > *': {
              paddingTop: '{spacing.5}',
            },

            '& th': {
              fontWeight: '600',
              paddingRight: '{spacing.5}',
              textAlign: 'right',
              verticalAlign: 'top',
              whiteSpace: 'nowrap',
            },
          })}
        >
          <tbody>
            <tr>
              <th scope="row">School site:</th>

              <td>
                <Link href={props.urlForSchool}>🔗 {getDomain(props.urlForSchool)}</Link>
              </td>
            </tr>

            <tr>
              <th scope="row">Team site:</th>

              <td>
                <Link href={props.urlForTeam}>🔗 {getDomain(props.urlForTeam)}</Link>
              </td>
            </tr>

            <tr>
              <th scope="row">Division:</th>

              <td>{props.division}</td>
            </tr>

            <tr>
              <th scope="row">Address:</th>

              {/* eslint-disable-next-line solid/no-innerhtml */}
              <td innerHTML={textToHtml(props.address)} />
            </tr>

            <tr>
              <th scope="row">Map:</th>

              <td>
                <Link href={getMapUrl(props.address)}>🔗 LINK</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </FlexStack>
    </div>
  );
};

// Export.
export default College;
