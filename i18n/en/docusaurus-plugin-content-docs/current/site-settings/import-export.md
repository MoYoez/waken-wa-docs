---
sidebar_position: 5
---

# Import and Export

Admin path: `Web Settings` -> `Advanced` -> `Import and Export`

This page copies the current site configuration package, or applies a package exported from another environment to the current site.

The export result is **Base64-encoded JSON**.  
When importing, the package is parsed and supported fields are applied to the current form.

:::warning
After applying a configuration package, you still need to click "Save configuration" at the bottom of the page before it is actually written to the site configuration.  
If you only click "Apply configuration package" and then refresh the page, ordinary settings may not be saved.
:::

## Main features

- Copy the current site configuration package
- Apply a package exported from another environment
- Preserve existing configuration during migration for comparison and rollback

## Copy the current package

After clicking "Copy current configuration package", the system exports the current site configuration and copies it to the clipboard.

This package can be used to:

- Keep a backup before changing settings
- Copy locally tuned settings to the server
- Sync test environment settings to production
- Preserve appearance and behavior settings when migrating from an old deployment to a new one

:::tip
If you are about to make large changes to the theme, background images, rules, or runtime behavior, copy a configuration package first.  
If something goes wrong, you can paste it back and stay much calmer.
:::

## Apply a configuration package

After clicking "Apply configuration package", an input dialog appears.

The usual flow is:

1. Paste the previously copied Base64 configuration package
2. Click "Apply configuration package"
3. Check whether the settings on the page match expectations
4. Click "Save configuration" at the bottom

After applying, the configuration first enters the current form state.  
In other words, before actually saving, you can still adjust it or discard this change.

## What gets overwritten

Importing overwrites supported site configuration fields.

This generally includes:

- Basic profile data, such as site title, homepage name, description, and note
- Frontend display settings, such as transition loading, smooth scrolling, Hitokoto, and font options
- Theme and background configuration
- Runtime behavior, such as activity display, status cards, update mode, and Steam settings
- Rule-tool configuration, such as app display rules, blacklist/whitelist rules, and media source rules

If the package contains fields unsupported by the current version, they are usually ignored.

## What is not fully migrated

The configuration package is not a full database backup.

It is not equivalent to migrating the whole site, and usually does not fully include:

- Activity history
- Device list and approval status
- Plaintext API tokens
- Admin account passwords
- Original storage environment for uploaded assets
- All business data inside the database

:::warning
The page lock password is cleared during import. It is not reused directly from the configuration package.  
If you need page lock after importing, enter the password again and save.
:::

## Images and assets

The configuration package can include image URLs or related settings, but it cannot guarantee that image assets will work in the new environment.

For example:

- If the configuration contains remote image URLs, the new environment must be able to access those URLs
- If the configuration uses uploaded assets from the original site, the corresponding assets must still exist
- If you change storage providers or domains, old image URLs may need to be uploaded again or replaced

After migration, check avatars, site icons, background images, status card covers, and similar assets carefully.

## Recommended usage

Recommended:

- Migrate configuration between the same or nearby versions
- Back up a theme
- Tune frontend style locally and sync it online
- Save a copy before changing runtime behavior or rules

Not recommended:

- Import very old configuration packages across many versions
- Treat it as a full backup solution
- Import a package from someone else without understanding its content

If the version gap is large, upgrade the old environment first, then copy the configuration package.

## If import fails

If the package is reported as invalid, check:

- Whether the entire Base64 string was copied
- Whether extra text was mixed into the string
- Whether it came from a Waken-Wa site configuration export
- Whether the package version is too old

If import succeeds but the result is wrong, do not save it yet. You can discard the unsaved change or paste your previous backup package again.
